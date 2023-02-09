const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const loginlogout = require('./loginlogout');

router.use('/post', postRoutes);
router.use('/userRoutes', userRoutes);
router.use('/login', loginlogout);


module.exports = router;