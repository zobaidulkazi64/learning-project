const router = require('express').Router()

// costom module for testing purposes only for development.
const {

    signupGetController,
    signupPostController,
    loginGetController,
    loginPostController,
    logoutController 

} = require('../controllers/authController')



// @ts-check
router.get('/signup', signupGetController)
router.post('/signup', signupPostController)

//@ts-check
router.get('/login', loginGetController)
router.post('/login', loginPostController)
//@ts-check
router.get('/logout', logoutController)

module.exports = router