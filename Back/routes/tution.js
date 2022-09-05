const express = require('express')

const {
    getTution
} = require('../controllers/tutionController.js')

const tution = require('../model')
const router = express.Router()

router.get('/:id',getTution)

module.exports = router
