'use strict';
const express = require('express')
const router = express.Router()
const Controller = require('../controllers/memberC.js')

//Members Page
router.get('/', (Controller.showData))


//Add-Members Page
router.get('/add', (Controller.getFormAdd))
router.post('/add', (Controller.addData))

//Edit-Members Page
router.get('/edit/:id', (Controller.getFormEdit))
router.post('/edit/:id', (Controller.editData))

//Delete-Members Page
router.get('/delete/:id', (Controller.deleteData))

module.exports = router