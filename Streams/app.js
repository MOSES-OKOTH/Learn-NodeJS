const {createReadStream, writeFile} = require('fs')
const http = require('http')

// Creating a large readable file
for(let i=0; i<1000; i++){
    writeFile('big.txt', `${i} This is a big test file \n`, {flag: 'a'}, (err, res)=>{
        if(err){
            console.log(`An error occured while writing the file: ${err}`)
            return;
        }
    })
}

const server = http.createServer((req, res)=>{
    if(req.url === '/stream'){
        let stream = createReadStream('./big.txt', {encoding: 'utf-8'})

        stream.on('data', (data)=>{
            // console.log(data);
            res.writeHead(200, {'Content-Type': 'Text/plain'})
            res.end(data)
        })

        stream.on('error', (err)=>{
            res.end(`An error occured while reading the stream: ${err}`)
        })
    } else{
        res.end(`Hello, and welcome to my testing ground. Go to /stream to learn more`)
    }

})

server.listen(3000, ()=>{
    console.log('Server created')
})