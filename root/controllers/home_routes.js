const router = require('express').Router();
const sequelize = require('../config/connection');
const Post = require('../models/Post');
// C:\Users\thors\bootcamp\homework\phase2\tech-blog\root\controllers\home_routes.js


    router.get('/', async (req, res) => {
      // We find all dishes in the db and set the data equal to dishData
      const postData = await Post.findAll().catch((err) => { 
        res.json(err);
      });
      
      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('home', { 
        posts,
        loggedIn: req.session.loggedIn
      });
      });

      router.get('/login', (req, res) => {
        if (req.session.loggedIn) {
          res.redirect('/');
          return;
        }
        res.render('login');
      });
    module.exports = router;