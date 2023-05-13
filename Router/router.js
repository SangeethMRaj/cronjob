const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.post('/user',controller.addUser)

module.exports = router