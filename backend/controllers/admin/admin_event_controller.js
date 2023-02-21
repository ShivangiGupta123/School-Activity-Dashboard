const admin_event_schema = require('../../schema/admin/admin_event')
const admin_view_schema = require('../../schema/user/user_event')
const moment = require('moment')
const admin_event = async(req,res)=>{
    const {Event_name , Activity_name , Start_date , End_date , Participant_required} = req.body
    // const body = req.body
    try{
        const existing_event_name = await admin_event_schema.findOne({Event_name : Event_name})
        if(existing_event_name){
            res.status(400).json({message : "Already exist this Event Name "})
        }
        const event_organization = new admin_event_schema(req.body)
        const store = await event_organization .save()
        res.status(201).json({success : true , message : "Event will be organized on given information" , data : store})


    }
    catch(error){
        console.log(error)
        res.status(500).json({error : error})
    }
}
const view_added_admin_event = async(req,res)=>{
    const current_date = new Date(moment(new Date()).format("YYYY-MM-DD"))
    const events = await admin_event_schema.find({End_date : {$gte:current_date}})
    res.status(200).json([events])

    // admin_event_schema.find((error , result)=>{
    //     if(error){
    //         console.log(error)
    //         res.status(500).json({error : error})
    //     }
    //     res.status(201).json(result )
    // })
}
const view_participant = async(req,res)=>{
    admin_view_schema.find((error , result)=>{
        if(error){
            console.log(error)
            res.status(500).json({error : error})
        }
        res.status(201).json({result:result})
    })
}
module.exports = {admin_event , view_participant , view_added_admin_event}


// const view_added_admin_event = async(req,res)=>{
//     admin_event_schema.find((error , result)=>{
//         if(error){
//             console.log(error)
//             res.status(500).json({error : error})
//         }
//         res.status(201).json(result )
//     })
// }