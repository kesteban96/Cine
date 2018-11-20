// es la encargada de la conexion con la base de datos

const mongoose = require('mongoose');

const URI = 'mongodb://localhost/cine'; // direccion de la base de datos 

mongoose.connect(URI)
    .then(db => console.log('is connected')) //muestra en consola si esta conectado
    .catch(error => console.error(error)); //muestra en consola si esta desconectado


module.exports = mongoose;