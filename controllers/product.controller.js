const Product =require('../models/product.models') 

// This function will perform the INSERT operation 
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    )
    product.save((err)=> {
        if (err) {
            return next(err);
        }
        res.redirect('/list');
    })
}

// This function will load INSERT form, view to load
exports.product_formcreate = function (req, res) {
   
        res.render('createform', { page:'New Product', menuId:'createform'});        
    
}

// This function loads the view and finds all the documents in the product collections
exports.product_list =  (req, res)=> {
    Product.find( (err, product) =>{
        if (err) {
            return next(err);
        }
        res.render('list', { page:'List all Products', menuId:'list',product:product});        
    })
};

// This function will perform the DELETE operation

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.redirect('/products/list');
    })
};

// This function will load update form, view to load
exports.product_formupdate = function (req, res) {
    Product.findById(req.params.id,function (err, product) {
        if (err) return next(err);
        res.render('updateform', { page:'Update Product',menuId:'updateform', product:product});        
    })
};

// This function will perform the UPDATE operation

exports.product_update = (req, res)=> {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        
        res.redirect('/list');
    });
};
