// import React, { useRef, useState } from "react";
import {useState} from "react";
import { Validate } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../utils/firebase";

const Login = () => {
  const [login, setLogin] = useState(true);
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [errMessage, setErrMessage] = useState(null);

  function handleRegistration() {
    setLogin(!login);
  }
  function formHandler() {
    // console.log(email);
    let errmsg= Validate(email,password)
    setErrMessage(errmsg)
    if(errmsg) return;

    if(login){
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        // Signed Up
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        errMessage(errorCode,"",errorMessage)
      })
    } else{
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        // Signed In
        const user = userCredential.user
        console.log(user)
      })
      .catch((error)=>{
        const errorCode = error.code
        const errorMessage = error.message
        setErrMessage(errorCode,"",errorMessage)
      })
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex w-[25%] m-auto mt-[30vh] flex-col gap-3"
      >
        <h1 className="text-4xl font-semibold">
          {login ? "Log In" : "Sign Up"}
        </h1>
        {!login && (
          <input
            type="text"
            placeholder="User Name"
            className="border p-4 border-gray-500"
            // ref={userName}
            value={userName}
            onChange={(e) =>setUserName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="border p-4 border-gray-500"
          // ref={email}
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-4 border-gray-500"
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
          // ref={password}
        />
        <button className="bg-red-500 p-4 text-white" onClick={formHandler}>{login ? "Log In" : "Sign Up"}</button>
        <p className="text-ref-500 font-bold">{errMessage}</p>
        <p className="cursor-pointer" onClick={handleRegistration}>
          {login ? "Not registered? Sign Up" : "Already Regitered? Log In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
