const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose') 

// Import Router 

const authRouter = require('./routes/authRoute')


// TODO: app specific
const app =express()

// set up the view engine
app.set('view engine', 'ejs')
app.set('views', 'views')



// middleware for express
const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended: true}),
    express.json()
]
app.use(middleware)



// use authRouter
app.use('/auth', authRouter)


// TODO:  routers ans post

app.get('/', (req, res) => {

    res.json({
        mass: "i am 8080"
    })

   
})

//  server critical
// database connactions]

const PORT = process.env.PORT || 8080
mongoose.connect('mongodb://localhost/project_01')

.then(() => {
    console.log('Database Connactions')
    app.listen(PORT, (err) => {
        if(err) {
            console.log(err)
        }else {
            console.log(`Server is raning Port ${PORT}`)
        }
        
    })
})
.catch(err => {
    console.log(err, "Error while is database connected")
})