// import React from 'react'
import { useState } from "react"

const Login = () => {
    const [login,setLogin] = useState(true)
    function handleRegistration(){
        setLogin(!login)
    }
  return (
    <div>
      <form className="flex w-[25%] m-auto mt-[30vh] flex-col gap-3">
        <h1 className="text-4xl font-semibold">
            {login ? "Log In" : "Sign Up"}
        </h1>
        {!login && (<input type="text" placeholder="User Name" className="border p-4 border-gray-500"/>)}
        <input type="email" placeholder="Email Address" className="border p-4 border-gray-500"/>
        <input type="password" placeholder="Password" className="border p-4 border-gray-500"/>
        <button className="bg-red-500 p-4 text-white">Log In</button>
        <p className="cursor-pointer" onClick={handleRegistration}>
            {login? "Not registered? Sign Up" : "Already Regitered? Log In"}
        </p>
      </form>
    </div>
  )
}

export default Login
