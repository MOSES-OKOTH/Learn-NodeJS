const express = require('express')
const mid = require('./mid')

const app = express()

app.use(mid)

app.get('/',mid, (req,res)=>{
    res.send("Home")
})

app.get('/about',mid,(req,res)=>{
    res.send("About page")
})

app.listen('3000', ()=>{
    console.log(`Server started at port 3000`);
})