import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import VideoList from "./VideoList";
import Header from "./Header";

const Video = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramsKey = searchParams.get("v");

  useEffect(() => {
    let a = setInterval(() => {
      // console.log("object loaded");
    }, 2000);
    return () => {
      clearInterval(a);
    };
  });
  return (
    <>
      <Header />
      <div className="flex">
        <iframe
          title="YouTube video player"
          className="w-[1276px] h-[720px] rounded-[6%] mt-4 ml-14"
          src={`https://www.youtube.com/embed/${paramsKey}?si=6SBiTHU_tBFoF_w4`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
        <div className="ml-[48px] w-[390px] mt-4">
          <VideoList />
        </div>
      </div>
    </>
  );
};

export default Video;
