const path = require('path')


const myCrountPath = __filename



console.log(path.basename(__dirname ))
console.log(path.extname((myCrountPath)))


let pathObj = {
    dir: 'usr/local',
    name: 'testFile',
    ext: '.js'
}


console.log(path.format(pathObj))



console.log(path.isAbsolute(myCrountPath))
console.log(path.isAbsolute('./home.js'))



console.log(path.join('use', 'local','kazi.js'))


console.log(__dirname, 'script', 'script.js')



console.log(path.parse(myCrountPath))