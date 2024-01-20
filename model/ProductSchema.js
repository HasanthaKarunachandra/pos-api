const mongoose= require('mongoose');
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    unitPrice:{
        type:Number,
        require:true
    },
    qtyOnHand:{
        type:Number,
        require:true
    }
});

module.exports = mongoose.model('product',ProductSchema);