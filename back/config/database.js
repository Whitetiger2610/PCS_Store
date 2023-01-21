//const dotenv = require('dotenv')
const mongoose = require('mongoose');
//dotenv.config();
mongoose.set('strictQuery', false);


const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log("Base de datos mongo conectada con el servidor: " + con.connection.host);
    }).catch(con => {
        console.log("No se logro la conexión con la base de datos");
    })
}

module.exports = connectDatabase;