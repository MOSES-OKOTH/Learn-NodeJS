const {readFileSync, writeFileSync} = require('fs');

/* Writing to a file synchronously */
writeFileSync('./sync.txt', 'This is a test file written synchronously\n', {flag: 'a'})

/* Reading a file synchronously */
let data = readFileSync('./sync.txt', {encoding: 'utf-8'})

console.log(data)

console.log(`I will appear last since all the other operations are handled synchronously.`)