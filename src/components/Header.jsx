import { useEffect, useState } from 'react'
import Logo from "../assets/yt-logo.png";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useUserContext } from "../context/AddUserContext";
import {Link} from "react-router-dom"
import { useFetch } from '../hooks/useFetch';
// import 'dotenv/config'

const Header = () => {
  const [searchVal,setSearchVal] = useState("")
  let [resData,setResData] = useState("")
  let { user } = useUserContext();
  let [suggValues,setSuggValues] = useState(false)

  // const apiKey = process.env.Youtube_Api_Key;
  // const apiUrl = process.env.REACT_APP_API_URL;
  // console.log(apiKey)

  function handleSignOut() {
    // const auth = getAuth()
    signOut(auth)
      .then(() => {
        // user = null
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
      });
  }
  async function ResVideoList(){
    let res = await useFetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${(import.meta.env).VITE_REACT_API_KEY}`
    )
    setResData(res.items)
  }
      // async function fetchData(){
    //     let data = await fetch(
    //       "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=AIzaSyCS8mGrSJW8BEopuoQDXMxAn5vOs6ZEjYg"
    //     )
    //     let res = await data.json()
    //     setResData(res.items)
    // }
    useEffect(()=>{
      // console.log(resData)
      let a =setTimeout(()=>{
        if(searchVal.length >=1){
          // fetchData()
          ResVideoList()
        }
      },300)
      return()=>{
        clearTimeout(a)
      }
    },[searchVal])
    console.log(resData)

    function searchHandler(e){
      setSearchVal(e.target.value)
      setSuggValues(true)
    }

  return (
    <div className="p-5 flex justify-between items-center">
      <div>
        <img src={Logo} alt="" width="100" height="100" />
      </div>

      <div>
        <input
          className="border border-gray-400 rounded-l-full w-[28.5rem] h-8"
          type="text"
          name="Search"
          id=""
          value={searchHandler}
          onFocus={()=>{
            setSuggValues(true)
          }}
          onBlur={()=>{
            setSuggValues(false)
          }}
        />
      </div>
      <div className="border border-gray-400 h-8 w-[3rem] rounded-r-full"></div>
      {/* <div>map=>{}</div> */}
      <div>
        {user && (
          <>
            <button onClick={handleSignOut} className=" bg-green-500 w-28 h-12">
              Sign Out
            </button>
            <div>
              {suggValues && (
                <div>
                  {resData.localeCompare((e)=>{
                    <Link key={e.id} to={`watch?v=${e.id}`}>
                      <div>{e.snippet.title}</div>
                    </Link>
                  })}
                </div>
              )}
            </div>
            
          </>
        )}
      </div>
      {/* <p>
        {JSON.stringify(import.meta.env)}
      </p> */}
      {/* {console.log((import.meta.env).VITE_REACT_API_KEY)} */}
    </div>
  );
};

export default Header;
