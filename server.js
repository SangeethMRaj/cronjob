const express = require('express')
const mongoose = require('mongoose')
require('./cron')
const app = express()
const Router = require('./Router/router')
const dotenv = require('dotenv')

mongoose.connect('mongodb://localhost:27017/cronjob').then(()=>{
    console.log('MongoDb is connected');
})
dotenv.config()
app.use(express.json())
app.use('/',Router)

app.listen(3000,()=>console.log('Server is connected'))