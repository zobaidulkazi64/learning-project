const Contact = require('../schema/Contact')

exports.getAllUser = (req, res) => {

     Contact.find()

    
    .then((ueserDAta) => {
      
        res.render('index', {ueserDAta } )

    })

    // .catch(err => {
    //     console.log(err.message)
    // })
  

 

}
exports.getSingalUser = (req, res) => {

}

exports.createUser = (req, res) => {
   
    let {fastName, lastName, email, password, city, zip} = req.body
    let ueserDAta = new Contact({
        fastName,
        lastName,
        email,
        password,
        city,
        zip

    })

    console.log(req.body)

    // ueserDAta.save()

    // .then( ()=> {

    //     res.render('', {})
    // })
    // .catch( err => {
    //     console.log(err)
    // })



}
exports.updateUser = (req, res) =>{

}

exports.deleteUser = (req, res) => {

}





