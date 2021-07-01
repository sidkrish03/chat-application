const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (event) => {
    event.preventDefault()

    // const message = document.querySelector('input').value // Method 1 - to send message without 'name' property in form input
    const message = event.target.elements.message.value // Method 2 - to send message with 'name' property in form input

    socket.emit('sendMessage', message)
})