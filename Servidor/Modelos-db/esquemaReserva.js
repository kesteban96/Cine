// aca se modela lo necesario para realizar la reserva e la base de datos
const mongoose = require('mongoose');
const { Schema } = mongoose; //para definir el esquema  
// este mongoose lo usare para definir mis esquemas de datos los cuales seran reconocidos por mongodb

const esquemaReserva = new Schema({
    nombrePelicula: { type: String, required: true },
    nombrePersona: { type: String, required: true },
    nombreTeatro: { type: String, required: true },
    horaReserva: { type: String, required: true },
    ubicacion: { type: String, required: true },
    fecha: { type: String, required: true },
    precio: { type: Number, required: true }
});

//a continuacion se le indicara a mongo que datos voy a estar almacenando

module.exports = mongoose.model('reserva', esquemaReserva); // como llamare lo que voy almacenar y que esquema es el que guardare en la baase de dato
//el module.exports lo use porque voy a usar esto en otra parte de mi aplicacion