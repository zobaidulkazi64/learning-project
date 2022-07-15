const router = require('express').Router()
const {
     getAllUser,
     getSingalUser,
     createUser,
     updateUser,
     deleteUser

    
    } = require('../model/controller')





router.get('/', getAllUser)
router.get('/:id', getSingalUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)




module.exports = router