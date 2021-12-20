
const ProductModel = require('../models/productos');
const ProductosFile = new ProductModel('productos');

function getById(req, res){
    console.log('Viewing ' + req.params.id);
}

function getAll(req, res){
    ProductosFile.getAll().then((data) => res.send(`PRODUCTOS DISPONIBLES:  ${JSON.stringify(data)}`))
                          .catch((err) => {throw err}); 
}

function save(req, res){
    console.log('Todo created')
    
}

function update(req, res){
    console.log('Todo ' + req.params.id + ' updated')
    
}

function deleteProduct(req, res){
    console.log('Todo deleted'+ req.params.id);
    
}

module.exports = {
    getById,
    getAll,
    save,
    update,
    deleteProduct,
}