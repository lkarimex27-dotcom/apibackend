const { response, request } = require('express');
const Usuario = require('../modules/usuario'); 

// 1. OBTENER CLIENTES
const usuariosGet = async (req = request, res = response) => {
    try {
        const usuarios = await Usuario.find({ estado: true });
        res.json({
            total: usuarios.length,
            usuarios
        });
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener clientes' });
    }
}

// 2. CREAR CLIENTE (POST)
const usuariosPost = async (req = request, res = response) => {
    const { 
        idCliente, Nombre, Apellido_Paterno, Apellido_Materno, 
        Nombre_razonsocial, Direccion, Telefono, VENTA_Cod_producto, estado 
    } = req.body;

    const usuario = new Usuario({ 
        idCliente, Nombre, Apellido_Paterno, Apellido_Materno, 
        Nombre_razonsocial, Direccion, Telefono, VENTA_Cod_producto, estado 
    });

    try {
        await usuario.save();
        res.json({
            msg: 'Cliente creado exitosamente',
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error al guardar el cliente',
            error: error.message
        });
    }
}

// 3. ACTUALIZAR CLIENTE (PUT)
const usuariosPut = async (req, res = response) => {
    const { id } = req.params;
    const { _id, idCliente, ...resto } = req.body;

    try {
        const usuario = await Usuario.findByIdAndUpdate(id, resto, { new: true });
        res.json({
            msg: 'Cliente actualizado correctamente',
            usuario
        });
    } catch (error) {
        res.status(400).json({ msg: 'Error al actualizar' });
    }
}

// 4. ELIMINAR CLIENTE (DELETE)
const usuariosDelete = async (req, res = response) => {
    const { id } = req.params;
    try {
        // Eliminación lógica cambiando el estado
        const usuario = await Usuario.findByIdAndUpdate(id, { estado: false }, { new: true });
        res.json({
            msg: 'Cliente desactivado',
            usuario
        });
    } catch (error) {
        res.status(400).json({ msg: 'Error al eliminar' });
    }
}

// EL CAMBIO CLAVE: Debes exportar TODAS las funciones que usas en las rutas
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,    // <-- Faltaba este
    usuariosDelete  // <-- Faltaba este
}