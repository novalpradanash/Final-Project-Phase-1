const express = require('express');
const router = express.Router()

//router
const books = require('./books') 
const admins = require('./admins') 
const members = require('./members') 
const transactions = require('./transactions') 

//require controller
const homeC = require('../controllers/homeC.js')

// router.get('/', )
// router.use('/admins', admins)
// router.use('/books', books)
// router.use('/members', members)
// router.use('/transactions', transactions)

module.exports = router