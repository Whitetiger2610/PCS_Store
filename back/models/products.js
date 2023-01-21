const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    nombre:{
        type:String,
        required:[true,"Por favor registra el nombre del producto"],
        trim: true,
        maxLength:[120, "El nombre del producto no debe exceder los 120 caracteres" ]
    },

    precio:{
        type: Number,
        required:[true, "Por favor registra el precio del producto"],
        maxLength: [10, "El precio del producto no pueder estar por encima de 99'999.999"],
        default:0.0
    },

    descripcion:{
        type:String,
        required:[true, "Por favor registre una desripcion para producto"],
    },

    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        }
    ],

    categoria:{
        type:String,
        required:[true, "Por favor seleccione la categoria del producto"],
        enum: {
            values:[
                "Niños",
                "Hombre",
                "Mujer",
                "Hogar"
            ]    

            }
    },
    vendedor:{
            type:String,
            required:[true, "Por favor registre el vendedor del producto"]
    },

    inventario:{
        type:Number,
        required:[true, "Por favor registre el stock del producto"],
        maxLength:[5, "Cantidad máxima del producto no puede exceder 9999"],
        default: 0
    },

    numCalificaciones:{
        type:Number,
        default:0
    },

    opiniones:[
        {
            nombreCiente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentarios:{
                type:String,
                required:true
            }
        }
    ],

    fechaCreacion:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("productos", productSchema);