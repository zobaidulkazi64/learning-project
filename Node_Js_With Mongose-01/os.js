const fs = require('fs')



// fs.unlink('myFile.html',(err) =>{
//     if (err) throw ehtmlrr;
//     console.log('File deleted!');
//   });


fs.appendFile('app.js', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });