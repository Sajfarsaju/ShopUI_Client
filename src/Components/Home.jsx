import React, { useEffect, useState } from 'react'
import SectionOne from './SectionOne'
import Counter from './Counter'
import AXIOS_API from '../api/api'
function Home() {
  const [name, setName] = useState("Arun")
  const [user, setUser] = useState({})

  const token = localStorage.getItem("token")
  const fetchUser = async () => {
    const res = await AXIOS_API.get("/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    if (res.status === 200) {
      setUser(res.data.user)
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div className='text-center mt-3'>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-indigo-600">
          Welcome {user.name ? user.name : "Guest user"}
        </h1>
        <p className="mt-4 text-gray-600">
          Explore our products with a clean and modern interface.
        </p>
      </div>
      {/* <h1>Home Page</h1> */}

      {/* <Counter /> */}

      {/* <SectionOne name={name} /> */}
    </div>
  )
}

export default Home