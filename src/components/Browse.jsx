// import React from 'react'
// import { useUserContext} from '../context/AddUserContext'
import LeftNavMenu from "./LeftNavMenu"
import VideoList from "./VideoList"


const Browse = () => {
    // let {user} = useUserContext()
    // console.log(user)

  return (
    <div> 
      <LeftNavMenu/>
      <VideoList/>
    </div>
  )
}

export default Browse
