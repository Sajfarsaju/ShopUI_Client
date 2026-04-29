import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLoaderData } from "react-router-dom"
import SearchForm from "../SearchForm"

function ProductSection() {

    let products = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Smart Watch",
            desc: "Track your health and stay connected"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Headphone",
            desc: "High quality sound with noise cancellation"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Smart Watch",
            desc: "Modern Raiban Sunglass with stylish look"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Smart Watch",
            desc: "Track your health and stay connected"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Headphone",
            desc: "High quality sound with noise cancellation"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Smart Watch",
            desc: "Modern Raiban Sunglass with stylish look"
        }
    ]

    const [productData, setProductData] = useState([])

    async function fecthProducts() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProductData(data)
            })
            .catch((err) => console.log("Something Went Wrong...", err))
    }

    const [isErr, setIsErr] = useState(false)

    const fetchProductsData = async () => {
        try {
            setIsErr(false)
            const res = await axios.get("https://fakestoreapi.com/products")
            console.log(res);
            if(res.status === 200){
                setProductData(res.data)
            }
        } catch (error) {
            console.log("Something Went Wrong..", error);
            setIsErr(true)
        }
    }
    useEffect(() => {
        // fecthProducts()
        fetchProductsData()
        
    }, [])

    // if(isErr){
    //     "unable to fetch"
    // }else{
    //     if(productData.length > 0 ){
    //         map continue
    //     }{
    //         "loading..."
    //     }
    // }

    const productsDatas = useLoaderData()
    console.log(productsDatas)
    return (
        <section className="py-16 px-8">
            <h2 className="text-2xl font-semibold text-center mb-8">Our Products</h2>
            <SearchForm/>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center ">

                {
                    isErr ? (
                        <p>Unable to Fetch Products, Try again later</p>
                    ) : (

                        productsDatas.length > 0 ? productsDatas.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                price={product.price}
                                image={product.image}
                                title={product.title}
                                desc={product.description}
                                categ={product.category}
                                rating={product.rating}

                                product={product}
                            />
                        ))
                            : <p className="text-center">Products Loading...</p>
                    )
                }


            </div>

        </section>
    )
}

export default ProductSection