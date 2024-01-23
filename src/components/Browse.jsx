// import React from 'react'
// import { useUserContext} from '../context/AddUserContext'
import LeftNavMenu from "./LeftNavMenu"
// import VideoCard from "./VideoCard"
import VideoList from "./VideoList"


const Browse = () => {
    // let {user} = useUserContext()
    // console.log(user)

  return (
    <div className="flex gap-3"> 
      <LeftNavMenu/>
      <VideoList/>
    </div>
  )
}

export default Browse
