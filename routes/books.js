'use strict';
const express = require('express')
const router = express.Router()
const Controller = require('../controllers/bookC.js')

//Books Page
router.get('/books', (Controller.showData))

//Add-books Page
router.get('/add', (Controller.getFormAdd))
router.post('/add', (Controller.addData))

//Edit-books Page
router.get('/edit/:id', (Controller.getFormEdit))
router.post('/edit/:id', (Controller.editData))

//Delete-books Page
router.get('/delete/:id', (Controller.deleteData))

module.exports = router