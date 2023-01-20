const express=require("express")

const router= express.Router();

const {getProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route("/productos").get(getProduct); // Establecemos desde que ruta queremos ver el getProduct

module.exports = router;


