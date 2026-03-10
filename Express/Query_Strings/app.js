const express = require('express')

const app = express();

app.get('/api/search', (req, res)=>{
    let {name, age} = req.query;

    console.log(`Name: ${name}, Age: ${age}`);
    res.send(`Name: ${name}, Age: ${age}`);
})


app.listen(3000, ()=>{
    console.log(`Server started at port 3000`)
})