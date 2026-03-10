// console.log(`Hello champ!`)

const username = document.getElementById('username')
const email = document.getElementById('email');
const send = document.getElementById('send');

async function sendDetails(a, b) {
    const response = await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': a,
            'email': b
        })
    });

    const data = await response.json(); 
    console.log(data);
}

send.addEventListener('click', ()=>{
    sendDetails(username.value, email.value);
})