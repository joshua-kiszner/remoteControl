import express from "express";
import { Server } from "socket.io";
const app = express();

const port = 3000;
app.use(express.static('../client/build'));

const io = new Server(3001, {
    path:'/',
    cors: { origin: "*" },
});

io.on("connection", (socket) => {
    socket.on("controller-event", (coordinates) => {
        socket.broadcast.emit("new-coordinates", coordinates);
    })
    
});

app.listen(port, ()=>{
    console.log('server runnig');
})