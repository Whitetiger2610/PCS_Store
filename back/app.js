const express= require('express');
const app = express();

app.use(express.json());

//Importar Rutas

const productos = require("./routes/products")

app.use('/api', productos) // Sujeto a decision

module.exports = app


