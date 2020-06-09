const users = [];

const userEnter = ({ id, username, room }) => {
    room = room.trim().toLowerCase()

    const user = { id, username, room };

    users.push(user);
    return { user };
}

const userLeave = id => {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    };
}

const currentUser = id => {
    return users.find(user => user.id === id);
}

const usersInRoom = room => {
    return users.filter(user => user.room === room);
}

module.exports = {
    userEnter,
    userLeave,
    currentUser,
    usersInRoom
}