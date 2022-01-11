const EXPRESS = require('express');
const ProductosContoller = require('../controllers/productos');

const api = EXPRESS.Router();


// api.get('/obtenerPorId/:id', ProductosContoller.getById);
// api.get('/obtenerProductos', ProductosContoller.getAll);
// // api.post('/cargarProductos', ProductosContoller.save);
// api.put('/actualizarProducto/:id', ProductosContoller.update);
// api.delete('/eliminarProducto/:id', ProductosContoller.deleteProduct);


api.get('/', (req, res) => {
    res.render('pages/index')
})

api.post('/cargarProductos', ProductosContoller.save);
// api.post('/productos', async (req, res) => {
//     await productos.save(req.body)
//     res.redirect('/')
// })

api.get('/productos', ProductosContoller.getAll);
// router.get('/productos', async (req, res) =>{
//     const db = await productos.getAll()
//     res.render('pages/listado', {productos: db})
// })

module.exports = api;
