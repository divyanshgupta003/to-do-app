const express = require('express');
const router = express.Router();

const homeController = require('../controller/home_controller');


//all the controllers for the routes are defined in home_controller
router.get('/' , homeController.home);
//add list item
router.post('/add-list' , homeController.add);
//delete list item
router.post('/delete-list' , homeController.delete);

console.log('router loaded');


module.exports = router;