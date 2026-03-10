const express = require('express')
const app = express()

app.use(express.static('./FrontEnd2'))
app.use(express.json())

app.post('/api', (req,res)=>{
    const {username, email} = req.body

    const details = {'username':username,'email':email}

    console.log(details)

    res.status(200).json(details);

    return;
})

app.listen('3000', ()=>{
    console.log(`Server started at port 3000`)
})