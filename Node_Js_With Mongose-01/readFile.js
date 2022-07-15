const fs = require('fs')

// fs.readFile('./test.json', (err, data) => {
//     if (err) {
//         return console.log(err)
//     }


//     let obj= JSON.parse(data)

//     console.log(obj)

//     // console.log(data)

// })
//------------------------
// fs.readFile('./package.json', (err, data) => {
//     if(err) {
//         return console.log(err)

//     }else{
//         console.log('data read successfully')
//     }

//     let obj = JSON.parse(data)
//     console.log(obj)
//     // console.log(data)
// })


fs.open('os.js', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  })