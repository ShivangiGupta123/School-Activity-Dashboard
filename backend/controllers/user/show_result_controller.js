const result_schema = require('../../schema/admin/result_form')
const show_result = async(req,res)=>{
    result_schema.find((error , result)=>{
    if(error){
        res.status(500).json({error : error})
    }
    res.status(200).json(result)
})
}
module.exports = show_result