const express = require('express')

const app = express();

app.get('/api/products/:productId', (req, res)=>{
    let productId = req.params.productId;

    res.send(`Product ${productId} sent.`)
})

// app.all('*',(req, res)=>{
//     res.status(404).send(`Resource not found!`)
// })

app.listen('3000',()=>{
    console.log(`Server started at port 3000`)
})