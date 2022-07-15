const http = require('http');
const fs = require('fs')


// Wrte file kora hoisa ajka

// http.createServer(function (req, res) {

//     res.write('Hello World!'); //write a response to the client
//     res.end();

// }).listen(3000, (err) => {

//     console.log('server raning 3000')
// })

const server = http.createServer( (req, res) => {

    fs.readFile('./index.html', (err, data) => {
        res.write(data)

        res.end()

    })
   
})


server.listen(3000, (err) => {
    if(err){
        console.log(err)
    }else {
        console.log('server is raning 3000')
    }
})