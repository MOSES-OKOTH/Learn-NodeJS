const express = require('express')

const app = express();

// The front-end
app.use(express.static('./FrontEnd'))

// JSOn middleware
app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use

app.post('/post', (req,res)=>{
    const {name, email} = req.body;
    const details = {'name':name, 'email':email};


    console.log(details)
    res.status(200).json(details);
})

app.listen(3000, ()=>{
    console.log(`Server started at port 3000.`)
})