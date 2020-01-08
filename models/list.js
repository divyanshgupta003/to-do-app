const mongoose = require('mongoose');


//schema for the to-do app
var listSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    category : {
        type: String, 
        required : true
    },
    date : {
        type : String,
        required : true
    }
});
console.log('schema running fine');
var List = mongoose.model('List' , listSchema);

module.exports = List;