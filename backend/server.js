const app = require("./app");
const connectDatabase = require("./db/Database");

process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down server`);
});

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path: "config/.env",
    });
};

connectDatabase();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on https://localhost:${process.env.PORT}`);
})