// function withAuth(req, res, next) {
//   if (req.session && req.session.userId) {
//     return next();
//   } else {
//     return res.redirect('/login');
//   }
// }
function withAuth(req, res, next) {
  if (res.locals.sessionUserId) {
    return next();
  } else {
    return res.redirect('/login');
  }
}

module.exports = withAuth;