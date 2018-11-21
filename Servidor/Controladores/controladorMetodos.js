// aca tendre todos los metodos , los cuales los usare en las rutas
const esquemaReserva = require('../Modelos-db/esquemaReserva'); // para poder saber que tiene la base de datos
const controlador = {}; //cree el objeto controlador

// aca se realizan todos los metodos

//guardo la reserva
controlador.crearReserva = async(req, res) => {

    const solicitudReserva = new esquemaReserva(req.body); //lo que me manda el cliente a guardar en la base de datos
    await solicitudReserva.save();
    res.json({
        'status': 'reserva realizada'
    });

};
controlador.eliminarReserva = function() {

};

//obtengo todas las reservas realizadas
controlador.verReservas = async(req, res) => {

    //obtengo todas las reservas y laa guardo en una constante que se llama todasReservas  
    const todasReservas = await esquemaReserva.find(); // en mi base datos busca todos los datos
    res.json(todasReservas);
};


//obtengo la reserva realizada de alguien en especifico
controlador.verReserva = function() {

};

//editar reserva
controlador.editarReserva = function() {

};

module.exports = controlador; // exporto el objeto para poder usarlo en cualquier lugar