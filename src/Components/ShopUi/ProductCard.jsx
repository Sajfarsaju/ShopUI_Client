import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/features/cartSlice";

function ProductCard({ id, image, title, desc, categ, rating, price, product }) {

    const dispatch = useDispatch()

    return (
        <div className="border rounded-xl p-4 bg-white transition shadow-md hover:shadow-xl">

            <img src={image} alt={title} className="h-48 w-full object-contain" />

            <>
                <span className="text-gray-700 italic font-medium text-sm underline"> {categ.toUpperCase()} </span>
                <h2 className="text-lg font-medium line-clamp-2">
                    {title} - {price}
                </h2>
                <h1>Product ID - {id}</h1>
                <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                    {desc}
                </p>
            </>



            <Link to={`/product/${id}`}>
                <button
                    className="mt-4 mb-8 px-4 py-2 text-sm border rounded-lg mx-3
                hover:bg-black hover:text-white transition">View Details</button>
            </Link >
            <button
                onClick={()=> dispatch(addToCart(product))}
                className="mt-4 mb-8 px-4 py-2 text-sm border rounded-lg
                hover:bg-black hover:text-white transition">Add to Cart</button>
        </div>
    )
}

export default ProductCard