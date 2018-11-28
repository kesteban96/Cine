//confgurar el servidor cuando este empieza (encargado de arrancar el servidor)

const express = require('express');
const morgan = require('morgan'); //ayuda a ver por consola lo que el usuario esta pidiendo
const cors = require('cors');
const app = express(); //app es la encargada de tener toda la funcionalidad del servidor
const { mongoose } = require('./database'); // obtengo la conexion a la base de datos
// dividiendo el servidor en multiples tareas

// configuracion

app.use(express.static(path.join(__dirname, '../dist')));

app.set('port', process.env.PORT || 3000); //me indica que si en la nube me asignan un puerto debo tomarlo de lo contrario tome el 3000


//funciones que procesa datos

app.use(morgan('dev')); // siempre que exista una peticion pasara por aca
app.use(express.json()); //ayuda al servidor a entender los datos que vienen desde el navegador en formato json
app.use(cors({ origin: 'http://localhost:4200' }));
//rutas del servdor 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use('/api/reservas', require('./Routes-URL/reservas')); //obtengo el contenido de las rutas 
//con esto el servidor usara esta ruta

//iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto 3000') // es decir que mi servidor escucha en el puerto
});