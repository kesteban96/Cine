// me permite agregar reservas, eliminar, modificar

const express = require('express');

const router = express.Router(); //creando el objeto router el cual tendra todas las rutas

//router.get('/', (req, res) => {
//  res.send('hello world')
//});

//enviar y recibir datos en formato json
//esto me sirve para que despues angular pueda tomarlos y mostrarlos ya que son objetos de js
router.get('/', (req, res) => {
    res.json({
        status: 'Api works'
    });
});
module.exports = router;