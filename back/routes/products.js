const express=require("express")

const router= express.Router();

const {getProduct, newProduct, getProductById, updateProducto, deleteProducto} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route("/productos").get(getProduct); // Establecemos desde que ruta queremos ver el getProduct
router.route("/producto/nuevo").post(newProduct);// Establecemos la ruta para crear producto
router.route("/producto/:id").get(getProductById); // Establecemos la ruta para ver producto by Id
router.route("/producto/:id").put(updateProducto); //Establecemos ruta de actualizacion
router.route("/producto/:id").delete(deleteProducto); //Establecemos ruta para eliminar producto

module.exports = router;


