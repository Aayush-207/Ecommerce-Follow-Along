//eslint-disable-next-line
export default function Products({name, image,description, price}) {
    return (
        <div className="bg-neutral-200 p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div className="w-full">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4"/>
        <h2 className="text-lg font-bold"></h2>
        <p className="text-sm opticity-50 line-clamp-2">{description}</p>
            </div>
           <div className="w-full">
            <p className="text-lg font-bold my-2">${price}</p>
            <button className="w-full text-white px-4 py-2 rounded-md bg-neutral-900">More info</button>
            </div> 
        </div>
    )
    
}