// import React from 'react'

import { useState } from "react"

const Login = () => {
    const [login,setLogin] = useState(true)
    function handleRegistration(){
        setLogin(!login)
    }

  return (
    <div>
      <form className='flex w-[25%] m-auto mt-[30vh] flex-col gap-3'>
        <h1 className=''>
            {login ? "Log In" : "Sign Up"}
        </h1>
        <input type="text" placeholder='User Name'/>
        <input type="email" placeholder='Email Address'/>
        <input type="password" placeholder='Password'/>
        <button>Log In</button>
        <p>

        </p>
      </form>
    </div>
  )
}

export default Login
