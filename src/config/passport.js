const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

/* Modelo de Usuario */
const User = require('../models/User')

passport.use( new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {

  /* Validando el email */
  const user = await User.findOne({email})
  if(!user){
    return done(null, false, {message: 'Not user found'})
  }else{
    /* Validando el correo */
    const match = await user.matchPassword(password)
    if(match){
      return done(null, user)
    }else{
      return done(null, false, {message: 'Incorrect password'})
    }
  }
}))

passport.serializeUser((user, done) => {
  /* Cuando el usuario se registra, se guarda en la sessión del servidor */
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  /* Mientras que el usuario navega, se hace una consulta a la base de datos para ver si el ID tiene autorización y al final obtiene los datos relacionados con el usuario */
  User.findById(id, (err, user) => {
    done(err, user)
  })
})
