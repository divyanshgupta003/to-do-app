//connecting with the database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/to_do_app');

const db = mongoose.connection;

db.on('error' , console.error.bind(console , 'error in connecting with database'));

db.once('open' , function(){
    console.log('connected successfully with databse');
});