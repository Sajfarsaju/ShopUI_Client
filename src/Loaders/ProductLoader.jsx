import axios from "axios";

export default async function ProductsLoader( {request} ) {

    const url = new URL(request.url)
    // console.log("url:",url);

    const query = url.searchParams.get("query")
    // console.log(query)
    try {
        const res = await axios.get("https://fakestoreapi.com/products")

        let products = res.data
        console.log(products);
        

        // title = "Mens Casual Premium Slim Fit T-"
        // title = "mens casual premium"

        // query = "mEN"
        // query = "men" === title = "mens casual premium"

        // title.includes(query)

        if(res.status === 200){
            // console.log("from loader function:",res.data);
            
            // if user search any keywords, we should filter the products based on the query 
            if(query){
                products = products.filter((prod) => {
                    const lowerProdctTitle = prod.title.toLowerCase()
                    const queryLowe = query.toLowerCase() 
                    // console.log(lowerProdctTitle, queryLowe);
                    return lowerProdctTitle.includes(queryLowe)
                })
            }
            return products
        }
    } catch (error) {
        console.log(error);
    }
}

// export default ProductsLoader