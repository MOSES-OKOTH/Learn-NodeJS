let express = require('express');

let app = express();

app.get('/', (req,res)=>{
    res.send(`This is the home page.`)
    res.end();
})

app.get('/contacts', (req, res)=>{
    res.send(`This is the contacts page`);
    res.end();
})

app.get('/hello-world', (req, res)=>{
    res.send(`Hello, world! This is a test page.`)
    res.end();
})


app.all('*', (req, res)=>{
    res.status(404).send("Page not found")
})

app.listen(3000, ()=>{
    console.log(`Server started running at port 3000`)
})