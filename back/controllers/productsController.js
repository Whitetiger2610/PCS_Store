const producto = require("../models/products")

//Ver lista de productos

exports.getProduct=(req,res,next) =>{

    res.status(200).json({
        sucess:true,
        message: "En esta ruta se ven todos los productos"

    })
}

//Crear nuevo producto /api/productos

exports.newProduct = async(req,res,next) => {
    const product = await producto.create(req.body);
    res.status(201).json({
        success:true,
        product
    })

}