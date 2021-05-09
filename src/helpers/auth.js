const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()){
    return next()
  }
  req.flash('error_msg', 'User is not logged in')
  res.redirect('/users/signin')
}

helpers.isNotAuthenticated = (req, res, next) => {
  if(!req.isAuthenticated()){
    return next()
  }
  req.flash('error_msg', 'User is logged in')
  res.redirect('/notes')
}

module.exports = helpers
