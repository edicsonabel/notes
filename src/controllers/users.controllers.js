const usersCtrl = {}
const User = require('../models/User')
const passport = require('passport')

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup')
}

usersCtrl.signUp = async (req, res) =>{
  const err = [] // Arreglo de errores
  const {
    /* Obtenemos los datos del formulario */

    first_name,
    last_name,
    email,
    password,
    confirm_password
  } = req.body

  if(password !== confirm_password){
  /* Las contraseñas deben ser iguales*/

    err.push({text: 'Password do not match'})
  }
  if (password.length <= 4){
  /* Las contraseñas deben tener más de 4 carácteres */

    err.push({text: 'Password must be more than 4 characters long'})
  }
  if(err.length > 0){
  /* Regresamos a la página de registro con los errores */

    res.render('users/signup', {
      err,
      first_name,
      last_name,
      email
    })
  }else{
  /* Cuando todo va OK */

    /* Consultamos si hay un email registrado */
    const emailUser = await User.findOne({email}).lean()

    if (emailUser){
    /* Error cuando el email está registrado */

      req.flash('error_msg', 'The email is already registered')
      res.redirect('/users/signup')
    } else{
    /* Crear y registrar un nuevo usuario */
      const newUser = new User({
        name: `${first_name} ${last_name}`.trim(),
        email,
        password
      })
      newUser.password = await newUser.encryptPassword(password)
      await newUser.save() // Esperar a que se registre
      req.flash('success_msg', 'Successfully registered user')
      res.redirect('/users/signin') // Redireccionamos al formulario de login
    }
  }
}

usersCtrl.renderSignInForm = (req, res) =>{
  res.render('users/signin')
}

usersCtrl.signIn = passport.authenticate('local', {
  failureRedirect: '/users/signin',
  successRedirect: '/notes',
  failureFlash: true
})

usersCtrl.logout = (req, res) => {
  req.logout()
  req.flash('success_msg', 'Session successfully closed')
  res.redirect('/users/signin')
}

module.exports = usersCtrl
