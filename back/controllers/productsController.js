exports.getProduct=(req,res,next) =>{

    res.status(200).json({
        sucess:true,
        message: "En esta ruta se ven todos los productos"

    })
}