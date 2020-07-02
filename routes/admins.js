'use strict';
const express = require('express')
const router = express.Router()
const Controller = require('../controllers/adminC.js')

//Login Page
router.get('/', (Controller.getLoginAdmin))

//login page
router.get('/login', (Controller.getLoginAdmin))
router.post('/login', (Controller.postLoginAdmin))

//register page
router.get('/register', (Controller.getRegisterAdmin))
router.post('/register', (Controller.postRegisterAdmin))

//logout 
router.post('/logout', (Controller.getLogoutAdmin))

module.exports = router