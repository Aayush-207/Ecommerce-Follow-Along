const express = require("express");
const path = require("path"); // Missing import
const Product = require("../model/product");
const User = require("../model/userModel");  
const router = express.Router();
const { pupload } = require("../middleware/multer");

const validateProductData = (data) => {
    const errors = [];

    if (!data.name) errors.push("Product name is required");
    if (!data.description) errors.push("Product description is required");
    if (!data.category) errors.push("Product category is required");
    if (!data.price) errors.push("Product price is required");
    if (!data.stock) errors.push("Product stock is required");
    if (!data.email) errors.push("Product email is required");

    return errors;
};

router.post('/create-product', pupload.array('images', 10), async (req, res) => {
    const { name, description, category, tags, price, stock, email } = req.body;
    const images = req.files.map((file) => file.path);

    const validationErrors = validateProductData({ name, description, category, price, stock, email });
    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
    }

    if (images.length === 0) {
        return res.status(400).json({ errors: "At least one image is required" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ errors: "User not found" });
        }

        const newProduct = new Product({
            name,
            description,
            category,
            tags,
            price,
            stock,
            images,
        });
        await newProduct.save();

        res.status(201).json({
            message: "Product created successfully",
            product: newProduct,
        });
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: "Server error" });
    }
});

router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ errors: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error("Server error",error);
        res.status(500).json({ errors: "Server error" });
    }
});

router.put('/update-product/:id', pupload.array('images', 10), async (req, res) => {
    const { id } = req.params;
    const { name, description, category, tags, price, stock, email } = req.body;

    try {
        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            return res.status(404).json({ errors: "Product not found" });
        }
        let updatedImages = existingProduct.images;
        if (req.files && req.files.length > 0) {
            updatedImages = req.files.map((file) => `products/${path.basename(file.path)}`);
        }

        const validateErrors = validateProductData({
            name,
            description,
            category,
            price,
            stock,
            email
        });

        if (validateErrors.length > 0) {
            return res.status(400).json({ errors: validateErrors });
        }

        existingProduct.name = name;
        existingProduct.description = description;
        existingProduct.category = category;
        existingProduct.tags = tags;
        existingProduct.price = price;
        existingProduct.stock = stock;
        existingProduct.email = email;
        existingProduct.images = updatedImages;

        await existingProduct.save();

        res.status(200).json({
            message: "Product updated successfully",
            product: existingProduct,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: "Server error" });
    }
});

router.delete('/delete-product/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            return res.status(404).json({ errors: "Product not found" });
        }

        await existingProduct.remove();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
        console.error("Server error", err);
        res.status(500).json({ errors: "Server error" });
    }
});

module.exports = router;
