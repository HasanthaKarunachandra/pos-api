const mongoose= require('mongoose');
const CustomerSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
});

module.exports = mongoose.model('customer',CustomerSchema);