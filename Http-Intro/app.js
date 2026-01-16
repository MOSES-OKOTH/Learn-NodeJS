const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/hello-world'){
        res.writeHead(200, {'Content-Type':'application/json'})
        res.write('Hello, World!')
        res.end()
    }

    if(req.url === '/'){
        res.end("Welcome home")
    }

    res.end("Invalid Request")
})

server.listen(3000)