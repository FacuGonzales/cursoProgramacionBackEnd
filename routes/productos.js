const EXPRESS = require('express');
// const app = EXPRESS();
// const SERVER = require('http').Server(app)
// const SOCKET = require('socket.io')(SERVER)

const ProductosContoller = require('../controllers/productos');

const api = EXPRESS.Router();


// api.get('/obtenerPorId/:id', ProductosContoller.getById);
// api.get('/obtenerProductos', ProductosContoller.getAll);
// // api.post('/cargarProductos', ProductosContoller.save);
// api.put('/actualizarProducto/:id', ProductosContoller.update);
// api.delete('/eliminarProducto/:id', ProductosContoller.deleteProduct);


api.get('/', (req, res) => {
    res.render("main",{
        url: "/api/cargarProductos",
        method: "post",
        button: "Create product"
    })
})

api.post('/cargarProductos', ProductosContoller.save);

api.get('/productos', ProductosContoller.getAll);
// router.get('/productos', async (req, res) =>{
//     const db = await productos.getAll()
//     res.render('pages/listado', {productos: db})
// })

// api.use(EXPRESS.json())
// api.use(EXPRESS.urlencoded({extended : true}))

module.exports = api;
