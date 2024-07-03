import React,{useEffect, useState} from "react";
import axios from 'axios';
import "./AddPost.css";
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {

  const[post, setPost]=useState('');
  const postButton = async () => {
    try {
      const postContent = document.getElementById('post').value;
      const response = await axios.post('http://localhost:8000/post/save', { title: postContent });
  
      if (response.data && response.data.success) {
        console.log(response.data);
      } else {
        console.error('Error:', response.data ? response.data.message : 'No response data');
      }
    } catch (error) {
      console.error('Error in postButton:', error);
    }
  };

  // useEffect(() => {
  //   console.log('Attempting to fetch posts from http://localhost:8000/post/get');
  //   axios.get('http://localhost:8000/post/get')
  //     .then((res) => {
  //       if (res.data.success) {
  //         console.log('Fetched data:', res.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching posts:', error);
  //     });
  // }, []);
  
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src="/images/1.jpg" alt="" className="addPostPic" />
          <input placeholder="Whats in your mind..? " type="text" className="addPostInput" id="post" valur={post}  onChange={(e) => setPost(e.target.value)}/>
        </div>
        <hr className="postHr"/>
        <div className="addPostBottom">
          
            <div className="addPostOptions">
               <div className="addPostOption">
                      <PhotoSizeSelectActualIcon htmlColor='orange' className="addPhoto"/>
                     <span className="addPostOptionText">Add Photo or video</span>
                 </div>
                 <div className="addPostOption">
                      <AddLocationAltIcon htmlColor='red' className="addPhoto"/>
                     <span className="addPostOptionText">Add Location</span>
                 </div>
                 <div className="addPostOption">
                      <LocalOfferIcon htmlColor='blue' className="addPhoto"/>
                     <span className="addPostOptionText">Add tag</span>
                 </div>
                 <div className="addPostOption">
                      <LiveTvIcon htmlColor='tomato' className="addPhoto"/>
                     <span className="addPostOptionText">Go Live</span>
                 </div>

            </div>
            <button className="postButton" onClick={postButton}>
                Post
            </button>
        </div>
      </div>
    </div>
  );
}
