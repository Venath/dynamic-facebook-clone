import React,{useEffect, useState} from "react";
import axios from 'axios';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import linkify from './Linkify'; // Import the linkify function

import "./Post.css";

export default function Post({post, removePost}) {

  const deletePosts =async(id)=>{
    try {
      const res= await axios.delete(`http://localhost:8000/post/delete/${id}`)
      if (res.data.success) {
        removePost(id);
      }
    } catch (error) {
      
    }
  }

  const editPost= async(id)=>{
try {
  const res= await axios.put(`/post/edit/${id}`)
  if(res.data.success){
    console.log("Edited")
  }
} catch (error) {
  
}
  }
  const onDelete =(id)=>{
    console.log("Deleted")
    deletePosts(id);
  }

  const onEditPost=(id)=>{
    console.log("object")
    editPost(id);
  }

  const [menuVisible,setMenuVisible]=useState(false);

const toggleMenu =(()=>{
setMenuVisible(!menuVisible)
})
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/images/1.jpg" alt="" className="postImage" />
            <span className="postUserName">Venath Randima</span>
            <span className="postTime">10 mins ago</span>
          </div>

         <div className="postTopRight">
         <MoreVertIcon className="dots" onClick={toggleMenu}/>
         {menuVisible && (
          <div className="dropdownMenu">
            <div className="dropdownItem" onClick={()=>onEditPost(post._id)}> Edit </div>
            <div className="dropdownItem" onClick={() => onDelete(post._id)}> Delete </div>
          </div>
         )}
         </div>
        
          
        </div>
        <div className="postCenter">
            <div className="postCaption">
               {/* <input type="text" value="" className="title" />  */}
            {linkify(post.title)}
            </div>
            <img src="/images/1.jpg" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
<img src="/images/facbookLikes.jpg" alt="" className="reactionPic" />
<img src="/images/facbookLikes.jpg" alt="" className="reactionPic" />
<img src="/images/facbookLikes.jpg" alt="" className="reactionPic" />
<span className="likeCount">10 </span>
            </div>
            
            <div className="postBottomRight">
                <span className="commentCount">20 comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
