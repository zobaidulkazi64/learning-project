const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

// Model Contact require
const router = require('./routes/routes')

const app = express()
// Views Engine

app.set('view engine', 'ejs' )

app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())




// TODO Router setup
app.use('/contacts', router)


//Routing Setup
app.get('/home', (req, res) => {
   
})



// darabace connact

const PORT = process.env.PORT || 4000

mongoose.connect(`mongodb://localhost:27017/myApp`, {

})

.then(() => {
    
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`)
        })

    console.log('database Connact')
})
.catch(err => {
    console.log(err, "database Err Hoisa")
})









