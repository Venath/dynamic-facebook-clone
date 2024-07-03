import React,{useEffect, useState} from "react";
import axios from 'axios';

import "./Post.css";

export default function Post() {

  const [posts, setPosts] = useState([]); // Correctly initialize the useState hook
  useEffect(() => {
   
    axios.get('http://localhost:8000/post/get')
      .then((res) => {
        if (res.data.success) {
          console.log('Fetched data:', res.data);
          setPosts(res.data.existingPost);
        }
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <img src="/images/1.jpg" alt="" className="postImage" />
          <span className="postUserName">Venath Randima</span>
          <span className="postTime">10 mins ago</span>
        </div>
        <div className="postCenter">
            <div className="postCaption">
                Hello I am Venath
                {posts.map((p) => (
              <div key={p._id}>{p.title}</div>
            ))}
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
