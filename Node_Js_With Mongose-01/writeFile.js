// const fs = require('fs')



// const testObj = {
//     name: 'Md Zobaidul Islam',
//     email: 'Zobaidu@gmail.com',
//     address: {
//         city: 'Dhaka',
//         country: 'Bnagladesh'
//     }
// }


// const data = JSON.stringify(testObj)


// fs.writeFile('test.json', data, (err) => {
//     if (err){
//         console.log(err)

//     }else{
//         console.log('File Write Success')
//     }
// })

//



const fs = require('fs')


// const myData = {
//     name: 'Md Abdulla Khan',
//     email: 'abdulla@yahoo.com',
//     password: 39012834091284,
//     value: true,
// }


const myData = '<h1>Zobaidul Islam Kazi</h1>'


const data = JSON.stringify(myData)

fs.writeFile('myFile-1.html', data, (err) => {
    if (err) {
        console.log(err)
    }
    else{
        console.log('File Write Successfully')
    }
})





 