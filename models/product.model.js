const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema ({
    name : {
        type : String,
        required : [true ," please enter the product name"],

    },
    age : {
        type : Number,
        required : [true, "enter ur age"],
        default : 0
    },

    
},{ 
    timestamps: true,
        
    }
)

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;