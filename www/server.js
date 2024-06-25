const express = require('express')
const path=require('path')
const {listen} = require("express/lib/application");
const port= 3000

const app=express()

app.use(express.json())

app.use(express.static(__dirname))
app.use(express.urlencoded({encoded:false}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})


app.listen(port,()=>{
    console.log("Server Started")
})