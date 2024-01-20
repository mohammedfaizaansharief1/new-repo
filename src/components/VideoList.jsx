import { useEffect, useState } from 'react'
import VideoCard from "./VideoCard"
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import Login from './Login'

const VideoList = () => {
    let [resData, setResData] = useState([])
    let [login,setLogin] = useState(false)

    async function ResVideoList(){
      let res = await useFetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=AIzaSyCS8mGrSJW8BEopuoQDXMxAn5vOs6ZEjYg"
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
      ResVideoList()
        // fetchData()
        // console.log(resData)
    },[])
  return (
    <div className='w-[85%] flex gap-5 flex-wrap'>
      {login ? 
        resData.map((e)=>{
          <Link key={e.id} to={`watch?v=${e.id}`}>
            <VideoCard 
              title={e.snippet.title}
              channelTitle={e.snippet.channelTitle}
              thumbnails={e.snippet?.thumbnails.default.url}
              />
          </Link>
        }) : <Login /> 
      } 
    </div>
  )
}

export default VideoList
