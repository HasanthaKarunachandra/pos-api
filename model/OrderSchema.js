const mongoose= require('mongoose');
const OrderSchema=new mongoose.Schema({
    date:{
        type:Date,
        require:true
    },
    customerDetails:{
        type:Object,
        require:true
    },
    totalCost:{
        type:Number,
        require:true
    },
    products:{
        type:Array,
        require:true
    }
});

module.exports = mongoose.model('order',OrderSchema);