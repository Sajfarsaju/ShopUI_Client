import { useState } from "react";
import AXIOS_API from "../api/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email, password);

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    try {

      // localStorage.removeItem("token")
      // return
      const response = await AXIOS_API.post("/login", { email, password })

      if (response.status === 200) {
        console.log(response);
        // console.log(response?.data.token);

        localStorage.setItem("token", response?.data?.token)
        navigate('/' , {replace : true})
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) alert("Email does not exist, try other one")
      if(error.response.status === 401) alert("Invalid password")
      if(error.response.status === 500) alert("Internal error, Try again later")
    }
  }


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 w-full max-w-sm">
        <p className="text-xs font-medium tracking-widest text-gray-400 font-mono mb-6">
          Login
        </p>
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Welcome back</h1>
        <p className="text-sm text-gray-500 mb-6">Sign in to your account</p>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1.5">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 px-3 text-sm bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
          />
        </div>
        <div className="mb-4">
          {/* <div className="flex justify-between items-center mb-1.5">
            <label className="text-sm text-gray-600">Password</label>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition">
              Forgot password?
            </a>
          </div> */}
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 px-3 text-sm bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full h-10 bg-gray-900 hover:bg-gray-700 active:scale-95 text-white text-sm font-medium rounded-lg transition-all duration-150"
        >
          Sign in
        </button>


        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account?{" "}
          <a href="#" className="text-gray-900 font-medium hover:underline">
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
}