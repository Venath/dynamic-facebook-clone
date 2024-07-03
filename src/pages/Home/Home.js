import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navigation/Navbar'
import LeftPane from '../../components/LeftPane/leftPane'
import PostPane from '../../components/PostPane/postPane'
import RightPane from '../../components/RightPane/rightPane'

export default function Home() {
  return (
    
    <div>
        <Navbar/>
        <div className="bottomContainer"> 
        <LeftPane/>
        <PostPane/>
        <RightPane/>
        </div>
       
     
    </div>
  )
}
