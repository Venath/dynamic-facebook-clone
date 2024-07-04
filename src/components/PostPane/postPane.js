import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./postPane.css"
import AddPost from '../AddPost/AddPost'
import Post from '../Post/Post'

export default function PostPane() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:8000/post/get');
      if (res.data.success) {
        console.log("Fetching data", res.data);
        setPosts(res.data.existingPost);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Initial fetch
  }, []);

  const handlePostAdded = () => {
    fetchPosts(); // Refetch posts when a new one is added
  };

  const removePost = (id) => {
    setPosts(posts.filter(post => post._id !== id));
  };

  return (
   
    <div className='postPaneBox'>
      <AddPost onPostAdded={handlePostAdded}/>
      <div>
      {posts.slice().reverse().map((post)=>(
      <Post key={post._id} post={post} removePost={handlePostAdded} />
      ))}
      </div>
    
  
    </div>
  )
}
