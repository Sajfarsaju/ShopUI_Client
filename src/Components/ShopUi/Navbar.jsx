import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, replace, useNavigate } from "react-router-dom";
import { toggleTheme } from "../../redux/features/themeSlice";
import React from "react";




function Navbar() {

    // function handleClick(eve) {
    //     console.log("Butten Clickedd......");
    //     alert("yes its clicked..")
    // }


    const ReduxStorage = {
        counter: { val: 0 },
        theme: { isLight: true },
        todo: { todoItems: [] }
    }

    const isLight = useSelector((state) => {
        console.log(state);

        return state.theme.isLight
    })

    const dispatch = useDispatch()

    // const [todos, setTodos] = useState([])

    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate('/login', { replace: true })
    }
    return (
        <nav className="sticky top-0 z-50 bg-indigo-50 border-b border-indigo-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
                <h1 className="text-xl font-semibold text-indigo-600">ShopUI</h1>

                <ul className="hidden md:flex gap-8 text-sm">
                    <Link to={'/'}>
                        <li className="hover:text-indigo-600 cursor-pointer transition">Home</li>
                    </Link>

                    <Link to={'/products'}>
                        <li className="hover:text-indigo-600 cursor-pointer transition">Products</li>
                    </Link>

                    <Link to={'/contact'}>
                        <li className="hover:text-indigo-600 cursor-pointer transition">Contact</li>
                    </Link>

                    <Link to={'/support'}>
                        <li className="hover:text-indigo-600 cursor-pointer transition">Support</li>
                    </Link>

                    <Link to="/cart">
                        <li className="hover:text-indigo-600 cursor-pointer transition">
                            Cart
                        </li>
                    </Link>
                </ul>
                <div className="flex items-center gap-3">
                    <p className="cursor-pointer"
                        onClick={() => dispatch(toggleTheme("hello"))}
                    > {isLight ? "Switch to Dark" : "Switch to Light"} </p>

                    {token ? (
                        <>
                        <button onClick={handleLogout} className="px-4 bg-indigo-300 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition">Logout</button>
                        {/* <button onClick={handleLogout} className="px-4 bg-indigo-300 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition">Profile</button> */}
                        </>
                    ) : (
                        <>
                            <Link to={'/login'}>
                                <button className="px-4 bg-indigo-300 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition">Login</button>
                            </Link>

                            <button onClick={() => alert("Signup clicked...")}
                                className="px-4 bg-indigo-300 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition">Sign up</button>
                        </>
                    )
                    }

                </div >
            </div >

        </nav >
    )
}

export default Navbar