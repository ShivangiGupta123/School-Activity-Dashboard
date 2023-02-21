const result_schema = require('../../schema/admin/result_form')
const result_form = async(req,res)=>{
    const body = req.body
    try{
        const performance_data = new result_schema(body)
        const store = await performance_data.save()
        res.status(201).json({success : true , message : "result form is submitted on the basis of performance" ,result : store })

    }
    catch(error){
        console.log(error)
        res.status(500).json({error : error})
    }
}
const view_result = async(req,res)=>{
        result_schema.find((error , result)=>{
        if(error){
            res.status(500).json({error : error})
        }
        res.status(200).json({message : "Results on the basis of performance" , result : result})
    })
}
module.exports = {result_form , view_result}