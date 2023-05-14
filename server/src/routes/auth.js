const express = require('express')
const router = express.Router()

const signUp = require('../controllers/auth')

router.get('/signUp', signUp)

module.exports = router