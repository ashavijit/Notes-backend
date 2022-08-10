const express = require("express");
const {createUser, loginUser, getUser, forgotPassword, resetPassword} = require('../controllers/auth')
const {validateUserRegister, validateUserLogin, fetchUser} = require('../middlewares')
const catchAsync = require('../utils/catchAsync')


const router = express.Router()

// Create a new user using: POST /api/auth/createuser "no login required"
router.post('/createuser', validateUserRegister, catchAsync(createUser))

// authenticate a user using: POST /api/auth/login "no login required"
router.post('/login', validateUserLogin, catchAsync(loginUser))

// get logged in user details using: POST /api/auth/getuser "login required"
router.post('/getuser',fetchUser, catchAsync(getUser))

// get logged in user details using: POST /api/auth/getuser "login required"
router.post('/forgotpassword', catchAsync(forgotPassword))

// get logged in user details using: POST /api/auth/getuser "login required"
router.put('/resetpassword/:resetToken', catchAsync(resetPassword))

module.exports = router