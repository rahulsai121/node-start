const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct({
    title:title,
    price:price,
    imageUrl:imageUrl,
    description:description

  })
  .then((result)=>{
    console.log(result)
  })
  .catch(err=>console.log(err))
  
};

exports.getEditProduct = (req, res, next) => {
  const editMode=/*req.query.edit*/true;
  //console.log(editMode)
  if(!editMode){
    return res.redirect('/')
  }
  const prodId=req.params.productId;
  req.user.getProducts({where:{id:prodId}})
  .then(products=>{
    const product=products[0]
    if(!product){
      return res.redirect('/');
      
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      product:product,
      editing:editMode
    });
  })
  
};

exports.postEditProduct=(req,res,next)=>{
  const prodId=req.body.productId;
  const updatedTitle=req.body.title;
  const updatedPrice=req.body.price;
  const updatedImageUrl=req.body.imageUrl;
  const updatedDes=req.body.description;
  const updatedProduct=new Product(prodId,updatedTitle,updatedImageUrl,updatedDes,updatedPrice)
  updatedProduct.save();
  res.redirect('/admin/products')
}

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((products)=>{
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
  }).catch();
};

exports.postDelete=(req,res,next)=>{
  const priodId=req.params.productId;
  console.log(priodId)
  Product.deleteById(priodId)
  res.redirect('/')
}
