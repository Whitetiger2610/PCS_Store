const producto = require("../models/products")
const fetch = (url) => import("node-fetch").then(({default:fetch}) => fetch(url));//usurpacion del require

//Ver lista de productos

exports.getProduct=async (req,res,next) =>{

    const productos = await producto.find();

    res.status(200).json({
        sucess:true,
        cantidad: productos.length,
        productos

    })
}

//Ver producto por ID

exports.getProductById = async (req,res,next) => {

    const productos = await producto.findById(req.params.id)

    if (!productos) {

        return res.status(404).json({
            success: false,
            message: "No encontramos ese producto"
        })
    }
    res.status(200).json({
        sucess:true,
        message: "A continuacion encuentras informacion sobre tu producto",
        productos

    })
    
}

//Update un producto

exports.updateProducto = async(req, res, next) => {

    let product = await producto.findById(req.params.id)

    if (!product) { //Verifico si el productos existe

        return res.status(404).json({
            success: false,
            message: "No encontramos ese producto"
        })
    }
    // Si el producto existe, entonces ejecuto actualizacion
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos
        runValidators:true
    });
    //Respondo Ok si el producto se actualiza
    res.status(200).json({

        success:true,
        message:"Producto actualizado",
        product
    })

}

//Eliminar un producto
exports.deleteProducto = async(req, res, next) => {

    const product = await producto.findById(req.params.id)

    if (!product) { //Verifico si el productos existe

        return res.status(404).json({
            success: false,
            message: "No encontramos ese producto"
        })
    }

    await product.remove();
    res.status(200).json({
        success: true,
        message:"Producto eliminado correctamente"
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

//Hablemos de fetch 
//Fetch es un modulo
//ver todos los productos

function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos();

//ver por id

function verProductoId(id){
fetch('http://localhost:4000/api/producto/'+ id)
.then(res=>res.json())
.then(res=>console.log(res))
.catch(err=>console.error(err))

}
//verProductoId("63cb640b136ec895e197daff");
