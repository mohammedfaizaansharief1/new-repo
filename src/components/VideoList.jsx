import { useEffect, useState } from "react";
// import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
// import Header from "./Header";

const VideoList = () => {
  let [resData, setResData] = useState([]);
  // let [login, setLogin] = useState(true);

  async function ResVideoList() {
    let res = await useFetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=AIzaSyCS8mGrSJW8BEopuoQDXMxAn5vOs6ZEjYg"
    );
    setResData(res.items);
  }
  // async function fetchData(){
  //     let data = await fetch(
  //       "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=AIzaSyCS8mGrSJW8BEopuoQDXMxAn5vOs6ZEjYg"
  //     )
  //     let res = await data.json()
  //     setResData(res.items)
  // }
  useEffect(() => {
    ResVideoList();
    // fetchData()
    // console.log(resData)
  }, []);
  return (
    <>
      <div className="w-[85%] flex gap-5 flex-wrap h-[1000px]">
        {resData?.map((e) => (
          <Link key={e.id} to={`/watch?v=${e.id}`}>
            <div className="w-[225px] h-[325px] ">
              <img
                src={e.snippet.thumbnails?.standard?.url}
                alt={e.snippet.title}
              />
              <h1>{e.snippet?.title}</h1>
              <h3>{e.snippet?.channelTitle}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoList;
