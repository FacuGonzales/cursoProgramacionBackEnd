
const { stringify } = require('nodemon/lib/utils');
const ProductModel = require('../models/productos');

const _productos = new ProductModel('productos')

const _listadoProductos = _productos.getAll();

function getById(req, res){
    const {id} = req.params

    _productos.getById(id).then(producto => (producto) ? res.send(producto) : res.send({error: "Producto no encontrado"}));
}

function getAll(req, res){
    // Render me permite dibujar los resultados el la vista
    const prods =  _productos.getAll();
    res.render("pages/listado", {
        productos: prods,
        hayProductos: prods.length
    });
    // res.send(_listadoProductos);
}

function save(req, res){
    const { title, price, thumbnail } = req.body
    const producto = { title, price, thumbnail }
    console.log(producto)
    // _productos.save(producto).then(p => res.send(p))

    // Con redirect me permite al crear el producto volver al formulario.
    _productos.save(producto).then(p => res.redirect('/'));
    
}

function update(req, res){
    const { id } = req.params

    if (!_listadoProductos.find(d => d.id == id)) return res.send({error: "Producto no encontrado"});
      
      
    const { title, price, thumbnail } = req.body
    const producto = { title, price, thumbnail }
    for (let i = 0; i < _listadoProductos.length; i++) {
      if(_listadoProductos[i].id == id){
        _listadoProductos[i].title = producto.title
        _listadoProductos[i].price = producto.price
        _listadoProductos[i].thumbnail = producto.thumbnail
      } 
    }
    _productos.save(_listadoProductos).then( res.send("Producto actualizado"))
  
    
}

function deleteProduct(req, res){
    const {id}= req.params
    if (!_listadoProductos.find(d => d.id == id)) return res.send({error: "Producto no encontrado"});
   
    _productos.deleteById(id).then(res.send("Producto eliminado"))
}

module.exports = {
    getById,
    getAll,
    save,
    update,
    deleteProduct,
}