const express = require('express')
const router =  express.Router()
const {user_event , view_participant} = require('../../controllers/user/user_event_controller')
router.post('/userevent',user_event)
router.get('/viewparticipant' , view_participant)

module.exports = router