import axios from "axios";

const AXIOS_API = axios.create(
    {
        // baseURL: "http://localhost:4000"
        baseURL: "https://shopui-server.onrender.com"
    }
)
export default AXIOS_API