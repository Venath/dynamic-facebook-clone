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

router.put('/post/edit/:id', async(req,res)=>{
try {
  const postId= req.params.id;
  const {title}=req.body;
  const updatePost={
    title
  };
const updatedPost=await Post.findByIdAndUpdate(postId, updatePost);
if(!updatedPost){
  return res.status(404).json({error: "Post not found"});

}
return res.status(200).json({status: "Post updated", post:updatedPost});

} catch (error) {
  console.error(err)
  return res.status(500).json({ status: "Error", error: err.message });

}
})

router.delete('/post/delete/:id', (req,res)=>{
  const postId = req.params.id;
  console.log("Deleted the post with id ", postId);

  Post.findByIdAndDelete(postId)
  .then(deletedPost=>{
    console.log("Deleted post", deletedPost);
    return res.status(200).json({
      success: 'deleted',
      deletedPost
    });
  }).catch(err=>{
    console.error('Delete error:', err);
    return res.status(400).json({
        error: err
    });
  })
})


module.exports = router; 
