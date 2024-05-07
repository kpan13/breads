// DEPENDENCIES
const express = require('express')
const breads = express.Router()

//INDEX
breads.get('/', (req, res) => {
    res.send('This is the index at / breads')
})
module.exports = breads 

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
// Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  

  // 404 Page
app.get('*', (req, res) => {
  res.send('error404')
})

  

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))




