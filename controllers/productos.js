const FS = require('fs');

const ProductModel = require('../models/productos');

function getById(req, res){
    console.log('Viewing ' + req.params.id);
}

function getAll(req, res){
    res.send('All todos')
    
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