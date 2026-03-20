const express = require('express');
const { dbConnection } = require('../database/config');
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'; // <--- Esta es la ruta que debes usar
        this.middlewares();
        this.routes();
        this.connectDb();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.static(__dirname + '/public'));
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }
    async connectDb() {
        await dbConnection();
    }
}

module.exports = Server;

