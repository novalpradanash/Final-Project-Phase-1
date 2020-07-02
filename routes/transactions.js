'use strict';
const express = require('express')
const router = express.Router()
const Controller = require('../controllers/transactionC.js')

//Transaction Page
router.get('/', (Controller.showData))

//Add-Transaction Page
router.get('/add', (Controller.getFormAdd))
router.post('/add', (Controller.addData))

//Detail-Transaction Page
router.get('/detail/:id', (Controller.getFormEdit))
router.post('/detail/:id', (Controller.editData))

//Delete-Transaction Page
router.get('/delete/:id', (Controller.deleteData))

module.exports = router