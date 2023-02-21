const express = require('express')
const result_router = express.Router()
const {result_form , view_result} = require('../../controllers/admin/result_form_controller')
result_router.post('/resultform',result_form)
result_router.get('/viewresult',view_result)


module.exports = result_router