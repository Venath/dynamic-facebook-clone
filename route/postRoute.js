const express = require('express');
const router = express.Router();
const Post = require('../model/postModel'); // Make sure the path is correct


router.post('/post/save', (req, res) => { 
  const newPost = new Post(req.body);
  newPost.save()
    .then(() => {
      return res.status(200).json({
        success: "Post saved successfully"
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err
      });
    });
});

router.get('/post/get',async(req, res)=>{
    try {
        const posts= await Post.find();
        res.status(200).json({ success: true, existingPost: posts });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching posts', error: err.message });

    }
});


module.exports = router; 
