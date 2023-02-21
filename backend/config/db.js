const mongoose = require('mongoose')
const database = async()=>{
    try{
        const url = process.env.DB_URL
        mongoose.set('strictQuery', false)
      const  mongoose_connection = await mongoose.connect(url)
      console.log("database is created successfully")


    }
    catch(error){
        console.log(error)

    }

}
module.exports = database