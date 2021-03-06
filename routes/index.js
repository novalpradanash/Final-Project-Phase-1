const express = require('express');
const router = express.Router()

//router
const books = require('./books') 
const admins = require('./admins') 
const members = require('./members') 
const transactions = require('./transactions') 

//require controller
const Controller = require('../controllers/adminC.js')

//Home Page (Login Interface)
router.get('/', (Controller.getIndex))

router.use('/admins', admins)
router.use('/books', books)
router.use('/members', members)
router.use('/transactions', transactions)

module.exports = router