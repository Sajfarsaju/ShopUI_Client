import { useSelector } from "react-redux";
import { removeCart } from "../../redux/features/cartSlice";
function Cart() {

    const cartItemss = useSelector((state) => state.cart.items)

    const totalPrice = cartItemss.reduce((acc, item) => acc + item.price, 0);
    return (
        <div className="max-w-7xl mx-auto px-8 py-8">
            <h1 className="text-2xl font-semibold text-indigo-600 mb-6">
                Your Cart
            </h1>
            {cartItemss.length === 0 ? (
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <p className="text-gray-600">Your cart is empty.</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <div className="md:col-span-2 space-y-4">
                        {cartItemss.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center"
                            >
                                <div>
                                    {/* <img src={item.image} alt="" /> */}
                                    <h2 className="font-medium text-gray-800">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        ₹ {item.price}
                                    </p>
                                </div>

                                <button
                                    // onClick={()=> dispatch(removeCart(item.id))}
                                    className="px-4 py-2 text-sm border border-red-400 text-red-500 rounded-lg
                  hover:bg-red-500 hover:text-white transition"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Summary Card */}
                    <div className="bg-white p-6 rounded-xl shadow-md h-fit">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Order Summary
                        </h2>

                        <div className="flex justify-between mb-2 text-gray-600">
                            <span>Total Items</span>
                            <span>{cartItemss.length}</span>
                        </div>

                        <div className="flex justify-between font-medium text-gray-800 mb-4">
                            <span>Total Price</span>
                            <span>₹ {totalPrice}</span>
                        </div>

                        <button
                            className="w-full bg-indigo-500 text-white py-2 rounded-lg
              hover:bg-indigo-600 transition"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
