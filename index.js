const COLORS = require('colors');
const APP = require('./app');

const PORT = 8080;

const _server = APP.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${_server.address().port}`.green));
_server.on("error", error => console.error(`Error en servidor ${error}`.red));
