const bcrypt = require('bcrypt')
const User = require('../models/User')


exports.signupGetController = (req, res, next) => {

    res.render('pages/auth/signup', {title: 'Sign Up Page'})
}

exports.signupPostController = async (req, res, next) => {


    let {username, email, password, confumpassword} = req.body

    

   try{

    let hashpassword = await bcrypt.hash(password, 11)


    let user = new User({
     username,
     email,
     password:hashpassword
    })

    let crtatUser = await user.save()
    console.log('User Created successfully', crtatUser)
    res.render('pages/auth/signup', {title: 'Sign Up Page'})

   } catch(e) {
    console.log(e)
    next(e)
   }
  

   

    


}

exports.loginGetController = (req, res, next) => {

    res.render('pages/auth/login', {title: 'Login In Your Account'})

}

exports.loginPostController = async (req, res, next) => {

    let {email, password} =  req.body

    try{

        let user = await User.findOne({email})

        if(!user) {
           return res.json({
                mass: "Invalid User Email"
            })
        }



        let match  = await bcrypt.compare(password, user.password)

        if(!match){
            return  res.json({
                mass: "invalid Created Password"
            })
        }

        console.log('successfully Created', user)
        res.send('<h1>Hello, Welcome My Facebook</h1>')

    } catch(e) {
        console.log(e)
        next(e)
    }
    

}


exports.logoutController = (req, res, next) => {

}