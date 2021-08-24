const express = require('express')
const { json, urlencoded } = require('body-parser')
const { index } = require('./features/index-controller')
const expHbs = require('express-handlebars')
const { cinemaList, cinemaDetails } = require('./features/cinemaController')
const { filmList, filmDetails } = require('./features/flimControllers')
const { bookingForm, bookingSubmit } = require('./features/bookingController')
const { myTickets, myTicketsAPI } = require('./features/tricketController')

const app = express()

// Templates
app.set('views', './views')
app.set('view engine', 'hbs')
app.engine('hbs', expHbs({
  extname: '.hbs',
  defaultLayout: false,
  partialsDir: ['./views/partials', './views/layouts']
}))

// Middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: false }))

// Routes
app.get('/', index)
app.get('/cinemas', cinemaList)
app.get('/cinemas/:slug', cinemaDetails)
app.get('/films', filmList)
app.get('/films/:slug', filmDetails)
app.get('/book', bookingForm)
app.post('/book', bookingSubmit)
app.get('/tickets', myTickets)
app.get('/api/v1/tickets', myTicketsAPI)
module.exports = { app }
