const express = require('express')
const router = express.Router()

const signUp = require('../controllers/users/signUp')

router.post('/signUp', signUp.createUser)

module.exports = router