const express = require('express')
const admin_router = express.Router()
const {admin_event , view_participant , view_added_admin_event} = require('../../controllers/admin/admin_event_controller')

admin_router.post('/adminevent',admin_event)
admin_router.get('/viewparticipant', view_participant)
admin_router.get('/view_added_admin_event', view_added_admin_event)


module.exports = admin_router