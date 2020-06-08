const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const { userEnter, userLeave, currentUser, usersInRoom } = require('./src/utils/users')

const router = require('./routes/index')

app.use(logger('dev'));
app.use(express.json());

app.use(router);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

io.on('connection', (socket) => {
    socket.on('join', ({ username, room }) => {
        const user = userEnter(socket.id, username, room);
        socket.join(user.room);

        socket.emit('message', {
            user: 'SocketChat',
            text: `Welcome to ${user.room}, ${user.name}!`
        });
        socket.broadcast.to(user.room).emit('message', {
            user: 'SocketChat',
            text: `${user.name} has entered the chat.`
        });

        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: usersInRoom(user.room)
        });
    });

    socket.on('sendMessage', message => {
        const user = currentUser(socket.id);

        io.to(user.room).emit('message', {
            user: user.name,
            text: message
        });
    });

    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if (user) {
            io.to(user.room).emit('message', {
                user: 'SocketChat',
                text: `${user.name} has left the chat.`
            });
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: usersInRoom(user.room)
            });
        };
    });
});

const port = process.env.PORT || 3001;

server.listen(port, () => console.log(`Server running on port ${port}`));