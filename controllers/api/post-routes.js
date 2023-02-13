const router = require("express").Router();
// const Post = require("../../models/Post");
// const Comments = require("../../models/Comments");
const User = require('../../models/User')
const withAuth = require("../../utils/auth");
const {Post, Comment} = require('../../models')



router.post("/", async (req, res) => {
  try {
    const { title, content, user_id } = req.body;
    const post = await Post.create({
      title,
      content,
      user_id
    });
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/newcomment", async (req, res) => {
  try {
    const { post_id, user_id, comment_text } = req.body;

    const comment = await Comment.create({
      user_id: user_id,
      post_id: post_id,
      comment_text: comment_text,
    });

    res.status(200).send({ message: comment });
  } catch (error) {
    return res.status(500).send({ message: "Error creating comment" });
  }
});


module.exports = router;
