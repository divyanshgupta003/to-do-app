const db = require('../config/mongoose');
const List = require('../models/list.js');

//displaying the contents on the home page
module.exports.home = function(req,res){
   List.find({} , function(err , list){
       if(err){
           console.log('error showing the results');
           return;
       }
       res.render('home',{
           title: 'To-Do App',
           list_list : list
       });
   });
};

//conntroller for adding the contents
module.exports.add = function(req,res){
    console.log(req.body);
    
    if(req.body.category == 'Other'){
        var category = req.body.category1;
    }else{
        var category = req.body.category;
    }
    

    List.create({
        description : req.body.description,
        category : category,
        date : req.body.date
    } , function(err , newList){
        if(err){
            console.log('error in entering the value' , err);
            return;
        }
        return res.redirect('back') ;
    });
};

//controller for deleting the contents
module.exports.delete = function(req , res){

    if(req.body.listItem == undefined){
        return res.redirect('back');
    }
    if(typeof(req.body.listItem) === 'string'){
        let id = req.body.listItem;
        List.findByIdAndDelete(id , function(err){
            if(err){
                console.log('error in deleting list item' , err);
                return;
            }

        });
    }
    if(typeof(req.body.listItem) === 'object' ){

    for(i of req.body.listItem){
        let id = i;
        List.findByIdAndDelete(id , function(err){
            if(err){
                console.log('error in deleting list item' , err);
                return;
            }

        });

    }
    }
    return res.redirect('back');
}