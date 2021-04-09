var express = require('express');
var router = express.Router();
const product_controller=require('../controllers/product.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home',menuId: 'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { page: 'About Us',menuId: 'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { page: 'Contact Us',menuId: 'contact'});
});

router.get('/list', function(req, res, next) {
  res.render('list', { page: 'View Product',menuId: 'view'});
});

//-------------CURD operation routes are here------
//Route that will show all products
router.get('/list',product_controller.product_list);
//route that will show the insert form 
router.get('/createform',product_controller.product_formcreate)
//This route will perform the insert operation
router.post('/create',product_controller.product_create);
//delete operations
router.post('/:id/delete',product_controller.product_delete);
//call the update form
router.post('/updateform/:id', product_controller.product_formupdate)
//update operations
router.post('/:id/update',product_controller.product_update)

module.exports = router;
