const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/db')
const user_event_api = require('./routes/user/user_event_routes')
const admin_event__api = require('./routes/admin/admin_event_routes')
const admin_result_api = require('./routes/admin/result_routes')
const show_user_result_api = require('./routes/user/show_result_routes')

require('dotenv').config()
db()
const PORT = process.env.PORT

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())
app.use('/user' , user_event_api)
app.use('/admin' , admin_event__api)
app.use('/admin',admin_result_api)
app.use('/user',show_user_result_api)
app.listen(PORT , ()=>{
    console.log(`server is created successfully on this PORT ${PORT} in the ${process.env.DEV_MODE} mode`)
})


