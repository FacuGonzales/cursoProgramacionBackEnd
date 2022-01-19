const EXPRESS = require('express');
const app = EXPRESS();
const engine = require('express-handlebars')

// Importaciones a express
const PATH = require('path')
const SERVER = require('http').Server(app)
const SOCKET = require('socket.io')(SERVER)

const ProductRoutes = require('./routes/productos');

let messages = []

app.engine("hbs",
engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: "./views/layouts",
    partialsDir:  "./views/partials"
    })
)

app.set("view engine", "hbs")
app.set("views", "./views")


app.use(EXPRESS.json());
app.use(EXPRESS.urlencoded({extended: false}));
app.use(EXPRESS.static('public'));

//Websockets

SOCKET.on("connection", (socket)=>{
    console.log("user connected. ID:",socket.id)
    socket.emit("message", "connected to websocket")
    products.index()
    .then(response =>{
        socket.emit("products", response)
    })
    socket.emit("chat", messages)

    socket.on("sendMessage", data =>{
        messages.push(data)
        SOCKET.sockets.emit("newMessage",data)
    })
    
    socket.on("receivedMessage", data =>{
        
    })
})



app.use('/api', ProductRoutes);

module.exports = app;