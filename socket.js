//setup the socket here
const dotenv = require('dotenv');
const http = require('http');
const socket = require('socket.io');

const io = socket(server, {
    cors: {
        origin: "*",
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);
    
    socket.on('task-updated', (data) => {

            console.log("something is get updated")        io.emit('update-task-list', data);
    });

    socket.on('new-task', (data) => {
        io.emit('add-new-task', data);
    });

    socket.on('new-comment', (data) => {
        io.emit('add-new-comment', data);
    });

    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });

        socket.on('task-deleted', ({ id, status }) => {
            io.emit('delete-task', { id, status });
          });});


