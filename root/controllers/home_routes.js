const router = require("express").Router();
const {Error}=require("sequelize")
const sequelize = require("../config/connection");
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comments");
const withAuth = require('../utils/auth')


router.get("/", async (req, res) => {
  const postData = await Post.findAll().catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("home", {
    posts,
    loggedIn: req.session.loggedIn,
  });
});



// router.get("/post/:id", async (req, res) => {

//   const postData = await Post.findByPk(req.params.id, {
    
//   })
//     const thePost = postData.get({plain: true});
//   res.render('post',{thePost})


//   //  try {
// //   const postData = await Post.findByPk(req.params.id, {
// //     include: [
// //       {
// //         model: Comment,
// //         as: 'comments',
// //         where: {
// //           post_id: postData.id
// //         }
// //       }
// //     ]
// //   })
// //   if(!postData){
// //     return res.status(404).json({message: 'post not found'})
// //   }
// //   const thePost = postData.get({plain: true});
// //   res.render('post',{ thePost, loggedIn: req.session} )
// //  } catch (error) {
// //   console.log(err);
// //   res.status(500).json(err);
// //  }
// //  res.render('post', {message: "it works"})
 
// } )



router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
// router.get("/post/:id", async (req, res) => {
//   const postData = await Post.findByPk(req.params.id, {
//     include: [
//       {
//         model: Comment,
//         as: 'comments',
//         where: {
//           post_id: req.params.id
//         }
//       },
//     ]
//   })
//   const thePost = postData.get({plain: true});
//   res.render('post', { post: thePost });
// });
router.get("/post/:id", withAuth, async (req, res) => {
  const userId = req.session.userId;
  const postData = await Post.findByPk(req.params.id, {
    include: [
      {
               model: Comment,
               as: 'comments',
               where: {
                 post_id: req.params.id
               },
               include: [
                 {
                   model: User,
                   as: 'user'
                 }
               ]
  },
]
  })
    const thePost = postData.get({plain: true});
  res.render('post',{post: thePost, userId: userId })
});



router.get("/logout", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("home");
});

router.get("/user/:userId", withAuth, async (req, res) => {
  const userId = req.params.userId;
  const postData = await Post.findAll({
    where: {
      user_id: userId
    },
    include: [{
      model: User,
      as: 'user'
    }]
  }).catch((err) => {
    res.json({message: err});
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("dashboard", {
    posts,
    loggedIn: req.session.loggedIn,
    userId: req.session.userid
  });
});

module.exports = router;
