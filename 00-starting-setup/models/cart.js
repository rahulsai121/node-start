const fs=require('fs')
const path=require('path')


const p = path.join(__dirname, '..', 'data', 'cart.json');



module.exports=class Cart{
    static addProduct(id,productPrice){
        fs.readFile(p,(err,fileContent)=>{
            let cart={products:[],totalPrice:0}
            if(!err){
                cart=JSON.parse(fileContent)
            }
            const existingProductIndex=cart.products.findIndex(prod=>prod.id===id)
            const existingProduct=cart.products[existingProductIndex];
            let UpdatedProduct;
            if(existingProduct){
                UpdatedProduct={...existingProduct}
                UpdatedProduct.qty=UpdatedProduct.qty+1;
                cart.products=[...cart.products];
                cart.products[existingProductIndex]=UpdatedProduct

            }else{
                UpdatedProduct={id:id,qty:1}
                cart.products=[...cart.products,UpdatedProduct]
            }
            cart.totalPrice=cart.totalPrice + + productPrice;
            fs.writeFile(p,JSON.stringify(cart),err=>{
                console.log(err)
            })
            
        })
    }

}