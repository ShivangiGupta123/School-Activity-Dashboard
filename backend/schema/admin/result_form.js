const mongoose = require('mongoose')
const result_schema = new mongoose.Schema({
    Event_name :{type:String , required:true},
    Activity_name :{type:String , required:true},
    Participant_name : {type : String , required : true},
    Performance : {type : String , required : true}
},{timestamps:true})
module.exports = mongoose.model('result_form',result_schema)