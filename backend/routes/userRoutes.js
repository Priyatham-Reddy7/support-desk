const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../controllers/userControllers')
const { protect} = require('../middleware/authMiddleware')

router.post('/',registerUser)

router.post('/login', loginUser)

//Inorder to protect the route, add 'protect' as a second argument
router.get('/me', protect, getMe)


module.exports = router