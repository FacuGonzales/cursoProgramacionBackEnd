
const fs = require('fs');

class Producto {

    constructor(file){
        this.file = file;
        try {
            this.productos = JSON.parse(fs.readFileSync(`../${file}`, 'utf-8'));
        } catch (error) {
            if(error.errno === -4058){
                console.error('No existe el archivo');
                this.productos = [];
            }
        }
    }

    getAll(){
        return this.productos;
    }

    async save(producto){
        let indice;

        (this.productos.length > 0) ? indice = this.productos[this.productos.length -1].id + 1 : indice = 1;
        
        let agregarProducto = {...producto, ...{"id": indice}};

        this.productos.push(agregarProducto);

        try {
            await fs.promises.writeFile(`./${this.file}`, JSON.stringify(this.productos), 'utf-8');

            return agregarProducto;
        } catch (error) {
            console.error(error);
        }
        
    }

    async getById(id){
        let producto = this.productos.find(p => p.id == id);
        return producto;
    }

    async deleteById(id){
        let producto = this.productos.filter(p => p.id != id);
        
        try {
            await fs.promises.writeFile(`./${this.file}`, JSON.stringify(producto), 'utf-8');
            console.log('Producto eliminado');
        } catch (error) {
            console.error(error);
        }
    }

    async deleteAll(){
        this.productos = [];

        try {
            await fs.promises.writeFile(`./${this.file}`, '', 'utf-8');
            console.log('Productos eliminados');
        } catch (error) {
            console.error(error);
        }
    }
}


module.exports = Producto;