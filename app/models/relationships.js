const mongoose = require('mongoose');

const relationshipsModel = mongoose.model('relationships',{
    name:{
        type:String,
        require:true
    },
    occupation:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    }
});

module.exports = relationshipsModel;