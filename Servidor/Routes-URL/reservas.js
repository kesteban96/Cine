// me permite agregar reservas, eliminar, modificar

const express = require('express');

const router = express.Router(); //creando el objeto router el cual tendra todas las rutas

//enviar y recibir datos en formato json
//esto me sirve para que despues angular pueda tomarlos y mostrarlos ya que son objetos de js
//estas son las rutas que el servidor tiene disponible
const controladorMetodos = require('../Controladores/controladorMetodos');
router.get('/', controladorMetodos.verReservas); //get:obtener para ver las reservas
router.post('/', controladorMetodos.crearReserva); //post:gurdar es para guardar datos
router.get('/:id', controladorMetodos.verReserva); //get para ver las reserva de una sola persona
router.put('/:id', controladorMetodos.editarReserva); //put: actualizar el id me ayuda a identificar a quien quiere actualizar
router.delete('/:id', controladorMetodos.eliminarReserva); //delete:eliminar
module.exports = router;