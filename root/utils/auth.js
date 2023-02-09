const withAuth = (req, res, next) => {

  if (!req.session.loggedIn) {
    res.redirect('/login');
  } 
};
module.exports = withAuth;