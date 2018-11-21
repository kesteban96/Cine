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
controlador.eliminarReserva = async(req, res) => {

    await esquemaReserva.findByIdAndRemove(req.params.id);
    res.json({
        status: 'reserva eliminada'
    });
};

//obtengo todas las reservas realizadas
controlador.verReservas = async(req, res) => {

    //obtengo todas las reservas y laa guardo en una constante que se llama todasReservas  
    const todasReservas = await esquemaReserva.find(); // en mi base datos busca todos los datos
    res.json(todasReservas);
};


//obtengo la reserva realizada de alguien en especifico
controlador.verReserva = async(req, res) => {

    //console.log(req.params.id); //me trae todos los parametros de la url, solo me va traer el id en este caso
    const reservaIndividual = await esquemaReserva.findById(req.params.id);
    res.json(reservaIndividual);
};

//editar reserva
controlador.editarReserva = async(req, res) => {

    //const editarIndividual = esquemaReserva.findByIdAndUpdate(req.params.id); //findByAndUpdate es busca por id y actualiza

    const reservaNueva = {
        nombrePelicula: req.body.nombrePelicula,
        nombrePersona: req.body.nombrePersona,
        nombreTeatro: req.body.nombreTeatro,
        horaReserva: req.body.horaReserva,
        ubicacion: req.body.ubicacion,
        precio: req.body.precio,
    };
    await esquemaReserva.findByIdAndUpdate(req.params.id, { $set: reservaNueva }, { new: true });
    res.json({
        status: 'reserva actualizada'
    })
};

module.exports = controlador; // exporto el objeto para poder usarlo en cualquier lugar