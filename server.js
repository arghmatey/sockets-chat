const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

server.listen(port, () => console.log(`Server running on port ${port}`));

io.on('connection', (socket) => {
    console.log('A new user connected to chat');

    socket.on('disconnect', () => {
        console.log('A user has disconnected')
    })
});