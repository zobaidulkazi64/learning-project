const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')



const app = express()


// views Engien Setup
app.set('view engine', 'ejs' )

// use morgan

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// post method

app.get('/creatpoll', (req, res) => {
    res.render('creatPoll')
})

app.get('/', (req, res) => {
    res.render('home')
})


// Database Connact
mongoose.connect(`mongodb://localhost:27017/newkazi`, {
    
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
})

.then(() => {

    // Application Lision
app.listen(3000, () => {
    console.log("Server listening 3000")
})
    console.log('Database connact')
})
.catch(err =>{
    console.log(err)
})

