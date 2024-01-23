import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Header from "./components/Header";
// import Login from "./components/Login";
// import { Outlet, useNavigate } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { UserProver } from "./context/AddUserContext";
import { useSearchParams } from "react-router-dom";

function App() {
  let [user, setUser] = useState();

  let [searchParams] = useSearchParams();
  let paramsKey = searchParams.get("v");

  // let [loa]
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const email = user.email;

        setUser({ uid: uid, email: email });
        console.log("usid from auth State Change", uid);
        console.log("email from auth State Change", email);
        
        // console.log(paramsKey)
        if(paramsKey==null){
          navigate("/home");
        }
        else{
          navigate(`/watch?v=${paramsKey}`)
        }
      }
      // else if(paramsKey==="watch"){
      //   navigate(`/watch?v=${paramsKey}`)
      // }
      else {
        setUser(null);
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <UserProver value={{ user }}>
        {/* <Header /> */}

        <Outlet />
      </UserProver>
    </>
  );
}

export default App;
