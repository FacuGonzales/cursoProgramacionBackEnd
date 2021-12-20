const EXPRESS = require('express');
const ProductosContoller = require('../controllers/productos');

const api = EXPRESS.Router();

api.get('/producto/:id', ProductosContoller.getById);
api.get('/productos', ProductosContoller.getAll);
api.post('/productos', ProductosContoller.save);
api.put('/producto/:id', ProductosContoller.update);
api.delete('/producto/:id', ProductosContoller.deleteProduct);

module.exports = api;
