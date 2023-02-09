const router = require('express').Router();
const Post = require('../../models/Post');
const Comments = require('../../models/Comments');

// route to create/add a post using async/await
router.post('/', async (req, res) => {
  try { 
    const newPost = await Post.create({
    title: req.body.post_name,
    user_id: req.body.description,
    content: req.body.guest_name,
  });
  // if the post is successfully created, the new response will be returned as json
  res.status(200).json(newPost)
} catch (err) {
  res.status(400).json(err);
}
});
router.post("post/:id/add-comment", async (req, res) => {
  const comment = await Comment.create({
    post_id: req.params.id,
    user_id: req.user.id,
    comment_text: req.body.comment
  });

  res.redirect(`/post/${req.params.id}`);
});


module.exports = router;
