const mongoose = require('mongoose')

const { Schema } = mongoose;

const UrlSchema = new Schema({
    longURL : {
        type : String,
        required : true
    },
    shortURL : {
        type : String,
        required : true,
        unique : true
    },
    views : [{ clickedON : {type : Number} }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
},
    {clickedON : true}
);

module.exports = mongoose.model('url' , UrlSchema)