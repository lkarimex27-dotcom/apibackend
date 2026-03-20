// Archivo: modules/usuario.js o cliente.js
const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    idCliente: { 
        type: String,
         required: true,
          unique: true },
    Nombre: { 
        type: String,
         required: true },
    Apellido_Paterno: { 
        type: String,
         required: true },
    Apellido_Materno: {
         type: String },
    Nombre_razonsocial: { type: String },
    Direccion: { type: String },
    Telefono: { type: Number },
    VENTA_Cod_producto: { type: Number },
    estado: { 
        type: Boolean,
         default: true }
});

module.exports = model('Cliente', ClienteSchema);