const express = require('express')
require('dotenv').config()

const connection = require('./src/config/db')
const router = require('./src/routes/router')

const app = express()

const port = process.env.PORT
connection()

app.use(express.json())
app.use(router)

app.listen(port,(req,res)=>{
    console.log(`your app is running on ${port}`)
})