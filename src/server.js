const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const morgan = require('morgan')

/* INITIALIZATIONS */
const app = express()

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

/* GLOBAL VARIABLES */

/* ROUTES */
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))

/* STATIC FILES */
app.use(express.static(path.join(__dirname, './public')))

/* EXPORTS */
module.exports = app
