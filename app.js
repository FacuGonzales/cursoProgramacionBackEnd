const EXPRESS = require('express');
const app = EXPRESS();
// const handlebars = require('express-handlebars')

// Importaciones a express
const PATH = require('path')
const SERVER = require('http').Server(app)
const SOCKET = require('socket.io')(SERVER)

const ProductRoutes = require('./routes/productos');

const mensajes = []

//-------------- UTILIZANDO HANDLEBARS ------------------------------
// app.engine(
//     "hbs",
//     handlebars({
//         extname: ".hbs",
//         defaultLayout: 'index.hbs',
//     })
// );
// app.set("view engine", "hbs");
// app.set("views", "./views/hbs-templates");

//-------------- UTILIZANDO PUG ------------------------------
// app.set('views', './views/pug-template');
// app.set('view engine', 'pug');

//-------------- UTILIZANDO EJS ------------------------------
// app.set('views', './views/ejs-templates');
// app.set('view engine', 'ejs');

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(EXPRESS.json());
app.use(EXPRESS.urlencoded({extended: false}));
app.use(EXPRESS.static(PATH.join(__dirname, 'public')));

// SOCKET
SOCKET.on('connection', socket => {
    console.log('Nuevo cliente conectado!');
    
    /* Envio los mensajes al cliente que se conectó */
    socket.emit('mensajes', mensajes);
    
    /* Escucho los mensajes enviado por el cliente y se los propago a todos */
    socket.on('mensaje', data => {
        mensajes.push({socketid: socket.id, mensaje: data})
        SOCKET.sockets.emit('mensajes', mensajes); 
    });  
});




app.use('/api', ProductRoutes);

module.exports = app;