const {readFile, writeFile} = require('fs');

/* Writing to a file asynchronously */
writeFile('./async.txt', 'Hello, this is a test file writen asynchronously.\n', {flag: 'a'},(err, res)=>{
    if(err){
        console.log(`An error occured writing to the file: ${err}`)
        return;
    }

    console.log(`File written successfully!`)
})

/* Reading the written file or any file */
readFile('./async.txt', {encoding: 'utf-8'}, (err, res)=>{
    if(err){
        console.log(`An error occured reading the file: ${err}`)
        return;
    } 

    console.log(res)
})

console.log('I can appear anywhere since the other processes are handled asynchronously')