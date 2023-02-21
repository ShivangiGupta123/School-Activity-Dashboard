const mongoose = require('mongoose')
const admin_event_schema = new mongoose.Schema({
    Event_name :{type:String , required:true},
    Activity_name :{type:String , required:true},
    Start_date : {type : Date , required:true},
    End_date : {type : Date, required:true },
    Participant_required :{type : Number }
},{timestamps:true})
module.exports = mongoose.model('admin_event',admin_event_schema)