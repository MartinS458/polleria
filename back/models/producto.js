'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
    nombre: {type: String, required: true},
    slug: {type: String, required: false},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true},
    stock: {type: Number, required: true},
   // nventas: {type: Number, default:0, required: true},
   // npuntos: {type: Number, default:0, required: true},
    estado: {type: String, default: 'Edicion', required: true},    
    createdAt: {type:Date, default: Date.now, require: true},
    peso: {type: Number, required: true},
});

module.exports = mongoose.model('producto', ProductoSchema);