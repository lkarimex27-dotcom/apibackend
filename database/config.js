const moongose = require('mongoose');

const dbConnection = () => {
    try {

        moongose.connect(process.env.MONGODB_CNN);
        console.log('Datos en linea');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar con la base de datos');
    }
}

module.exports = {
    dbConnection
}