const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const {addUser,removeUser,getUser,getUsersInRoom} = require('./Users/users')

app.use(express.static('client/build'));

const PORT = process.env.PORT || 5000;
// Importing routing module
const router = require('./Router/router');

io.on('connection',(socket)=>{
    console.log(" New socket connection");

    socket.on('join',({name,room},callback)=>{
        console.log(name,room);

        const {error , user} = addUser({id:socket.id,name,room});

        if(name===""||room===''){
            // When user and room values are empty
            return callback({chatDataAvail:false})
        }
        if(error) return callback(error);
        
        socket.emit('message',{user:'admin',text:`${user,name},welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name}, has joined`});

        socket.join(user.room);

        callback();
    })

    socket.on('sendMessage',(message,callback) => {
        const user = getUser(socket.id);
        

        io.to(user.room).emit('message', {user:user.name,text:message});

        callback();
    })

    socket.on('disconnect',()=>{
        const user = removeUser(socket.id);
        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user} has left.`})
        }
    })
})


app.use(router);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    
});




server.listen(PORT, ()=> console.log(`Server Started on port ${PORT}`));




