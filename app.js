const EXPRESS = require('express');
const app = EXPRESS();

const ProductRoutes = require('./routes/productos');

app.use('/api', ProductRoutes);

module.exports = app;