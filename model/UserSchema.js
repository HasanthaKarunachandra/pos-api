const mongoose= require('mongoose');
const UserSchema=new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    activeState:{
        type:Boolean,
        require:true
    }
});

module.exports = mongoose.model('user',UserSchema);