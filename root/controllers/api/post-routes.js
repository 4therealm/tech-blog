const router = require("express").Router();
const Post = require("../../models/Post");
const Comments = require("../../models/Comments");
const withAuth = require("../../utils/auth");

// route to create/add a post using async/await
router.post("/", async (req, res) => {
  const {title, user_id, content} = req.body
  try {
    const newPost = await Post.create({
      title, user_id, content
    });
    // if the post is successfully created, the new response will be returned as json
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/newcomment", async (req, res) => {
  try {
    const { post_id, user_id, comment_text } = req.body;

    const comment = await Comments.create({
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
