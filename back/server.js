const app = require('./app');

//Setear el archivo de configuracion

const dotenv = require('dotenv');
dotenv.config({path: 'back/config/config.env'}) //archivo de configuracion principal

const server= app.listen(process.env.PORT, () => {

  console.log("Conectado on port: " + process.env.PORT + " en modo: " + process.env.NODE_ENV);  

});