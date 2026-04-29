import axios from "axios";

export default async function SingleProductLoader({ params }) {
    console.log(params);
    const { productId } = params

    console.log("got productId:", productId);


    try {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)

        if (res.status === 200) {
            console.log("yes we got single product:::",res.data);
            
            return res.data 
            // 
        }
    } catch (error) {
        console.log(error);
    }
}