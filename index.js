const express = require('express');
const port = 8000;
const app = express();

//requiring mongoose
const db = require('./config/mongoose');

//here List contains the struncture of the to-do app
const List = require('./models/list');


app.use(express.urlencoded());

app.use(express.static('./assets'));

//view engine
app.set('view engine' , 'ejs');
app.set('views' , './views');

//setting up the routes
app.use('/' , require('./routes/index'));

app.listen(port , function(err){
    if(err){
        console.log(`Error in starting server on port: ${port}`);
        return;
    }
    console.log(`server running fine on port: ${port}`);
    return;
});