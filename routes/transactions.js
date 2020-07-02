'use strict';
const express = require('express')
const router = express.Router()
const Controller = require('../controllers/transactionC.js')

//Transaction Page
router.get('/', (Controller.showData))

//Add-Transaction Page
router.get('/add', (Controller.getFormAdd))
router.post('/add', (Controller.addData))

//Edit-Transaction Page
router.get('/edit/:id', (Controller.getFormEdit))
router.post('/edit/:id', (Controller.editData))

//Delete-Transaction Page
router.get('/delete/:id', (Controller.deleteData))

module.exports = router