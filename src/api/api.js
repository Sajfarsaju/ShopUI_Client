import axios from "axios";

const AXIOS_API = axios.create(
    {
        baseURL: "http://localhost:4000"
    }
)
export default AXIOS_API