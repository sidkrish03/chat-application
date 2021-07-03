const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if(!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for exisiting user
    const exisitingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if(exisitingUser) {
        return {
            error: 'Username is already in use!'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {
        return users.splice(index, 1)
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// Testing
addUser({
    id: 22,
    username: 'Sid ',
    room: ' Cali'
})

addUser({
    id: 23,
    username: 'Mike ',
    room: ' Cali'
})

addUser({
    id: 24,
    username: 'Drew ',
    room: ' Central City'
})


// console.log(users)

// const res = addUser({
//     id: 33,
//     username: 'Sid',
//     room: 'Cali'
// })

// console.log(res)

// const removedUser = removeUser(22)

// console.log(removedUser)
// console.log(users)

// const user = getUser(422)
// console.log(user)

// const userList = getUsersInRoom('Cali')
// console.log(userList)