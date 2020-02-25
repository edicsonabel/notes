const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

/* INITIALIZATIONS */
const app = express()
require('./config/passport')

/* SETTINGS */
app.set('port', process.env.PORT || 3000)

app.set('views', path.join(__dirname, './views'))

app.engine('.hbs', exphbs({
  /* Configuración para el uso de Handlebars */
  defaultLayout: 'default',
  layoutsDir: path.join(app.get('views'), './layouts'),
  partialsDir: path.join(app.get('views'), './partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

/* MIDDLEWARES */
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(methodOverride('_method'))
app.use(session({
  secret: 'ThatIsSecretSoShhhhhh',
  reseve: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

/* GLOBAL VARIABLES */
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  res.locals.user = req.user || null
  next()
})

/* ROUTES */
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))
app.use(require('./routes/users.routes'))

/* STATIC FILES */
app.use(express.static(path.join(__dirname, './public')))

/* EXPORTS */
module.exports = app
