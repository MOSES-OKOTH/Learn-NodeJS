const Event = require('events')


let event = new Event()

event.on('hello', (name, age)=>{
    console.log(`Hello, World! I am ${name} and I'm ${age} year old.`)
})

event.emit('hello', 'Moses Okoth', 24)