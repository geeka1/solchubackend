//inicializo el servidor express
// Requires
var express = require('express');
var mongoose = require('mongoose');

//Inicializo variables
var app = express();

// conexion a al base de datos
// mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
//     if (err) throw err;
//     console.log('Base de datos corriendo en el puerto 27017: \x1b[32m%s\x1b[0m', 'Online');
// })

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We are connected!! Solchu');
});
//Definir rutas
app.get('/', (req, res, next) => {
    res.status(403).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente con NODEMON jejeje!!!!!'

    });
});

// Ahora escucho las peticiones
app.listen(3000, () => {
    console.log('Express corriendo en el puerto 3000: \x1b[32m%s\x1b[0m', 'Online');
});