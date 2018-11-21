// aca tendre todos los metodos , los cuales los usare en las rutas

const controlador = {}; //cree el objeto controlador

// aca se realizan todos los metodos

//guardo la reserva
controlador.realizarReserva = (req, res) => {
    res.json({
        status: 'reserva realizada'
    });
}
controlador.eliminarReserva = function() {

};

//obtengo todas las reservas realizadas
controlador.verReservas = function() {

};


//obtengo la reserva realizada de alguien en especifico
controlador.verReserva = function() {

};

//editar reserva
controlador.editarReserva = function() {

};

module.exports = controlador; // exporto el objeto para poder usarlo en cualquier lugar