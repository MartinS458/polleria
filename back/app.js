'use strict'

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4201;

var empleado_route = require('./routes/empleado'); //aca van a estar inicializadas nuestras rutas
var caja_route = require('./routes/caja'); 
var producto_route = require('./routes/producto');
var venta_route = require('./routes/venta'); 
var admin_route = require('./routes/admin'); 
mongoose.connect('mongodb://127.0.0.1:27017/polleria',{useUnifiedTopology:true, useNewUrlParser:true},(err, res) =>{
    if (err){
        console.log(err);
    }else{
        console.log('Servidor corriendo');
        app.listen(port,function(){
            console.log('Servidor corriendo en el puerto ' + port);
        })
    }
});

app.use(bodyparser.urlencoded({extended:true}));  //cuando enviamos la informacion desde el front al back, tenemos que parsear esta data. Es para analizar el cuerpo de las peticiones
app.use(bodyparser.json({limit: '50mb',extended:true}));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api',empleado_route);
app.use('/api',caja_route);
app.use('/api',producto_route);
app.use('/api',venta_route);
app.use('/api',admin_route);
module.exports = app;