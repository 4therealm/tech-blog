const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user');
const loginlogout = require('./loginlogout');

router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/login', loginlogout);


module.exports = router;