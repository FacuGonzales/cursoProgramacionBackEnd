const EXPRESS = require('express');
const ProductosContoller = require('../controllers/productos');

const api = EXPRESS.Router();


api.get('/obtenerPorId/:id', ProductosContoller.getById);
api.get('/obtenerProductos', ProductosContoller.getAll);
api.post('/cargarProductos', ProductosContoller.save);
api.put('/actualizarProducto/:id', ProductosContoller.update);
api.delete('/eliminarProducto/:id', ProductosContoller.deleteProduct);

module.exports = api;
