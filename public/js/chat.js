const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (event) => {
    event.preventDefault()

    // const message = document.querySelector('input').value // Method 1 - to send message without 'name' property in form input
    const message = event.target.elements.message.value // Method 2 - to send message with 'name' property in form input

    socket.emit('sendMessage', message, (error) => {
        // console.log('The message was delivered!', message)
        if(error) {
            return console.log(error)
        }

        console.log('Message delivered!')
    })
})

document.querySelector('#send-location').addEventListener('click', () => {
    if(!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            console.log('Location shared!')
        })
    })
})