const express = require('express')
const show_result_router = express.Router()
const show_result = require('../../controllers/user/show_result_controller')

show_result_router.get('/showresult',show_result)


module.exports = show_result_router