import { Outlet } from "react-router-dom"
import Navbar from '../Components/ShopUi/Navbar'
import { useSelector } from "react-redux";
import React from "react";

function RootLayout() {
    // React Fragment -
    
    const isLight = useSelector((state) => state.theme.isLight)
    return (
        <>
            <Navbar />
            {/* Slidebar */}
            <main className={ isLight ? "bg-white text-black" : "bg-black text-white"} >
                {/* Home, About , Profile */}
                <Outlet/> 

            </main>

            {/* footer */}
        </>
    )
}
export default RootLayout