const express = require('express');
const path = require('path');
const logger = require('morgan');
const io = require('socket.io');

const app = express();
const server = require('http').Server(app);

app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`App running on port ${port}`)
});