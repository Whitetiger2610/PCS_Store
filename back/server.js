const app = require('./app');

//Setear el archivo de configuracion

const dotenv = require('dotenv');
dotenv.config({path: 'back/config/config.env'}) //archico de configuracion principal

const server= app.listen(process.env.PORT, () => {

  console.log("listening on port: " + process.env.PORT + " en modo: " + process.env.NODE_ENV);  

});