const express=require("express")

const router= express.Router();

const {getProduct, newProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route("/productos").get(getProduct); // Establecemos desde que ruta queremos ver el getProduct
router.route("/producto/nuevo").post(newProduct);// Establecemos la ruta para crear producto


module.exports = router;


