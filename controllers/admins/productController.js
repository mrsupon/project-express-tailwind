import Product from "../../models/product.js"

class ProductController{

    static index(req, res){
        Product.find()
        .then( ([rows, schema]) => {
            res.render('admins/products/index.ejs', {
            prods: rows ,
            pageTitle: 'Products',
            path: '/admins/products'
            });
        })
        .catch( err=>console.log(err) );
    }

    static create(req, res){
        res.render("admins/products/create.ejs", {
            pageTitle: 'Add Product',
            path: '/admins/products/create'
        });
    }

    static store(req, res){
        const title = req.body.title;
        const imageUrl = req.body.imageUrl;
        const description = req.body.description;
        const price = parseFloat(req.body.price); 
        const newProduct = new Product(title, imageUrl, description, price);
        newProduct.save()
        .then(()=>{
            res.redirect('/admins/products');
        })
        .catch( err=>console.log(err) );

    }    

    static edit(req, res){
        const productId = req.params.id;
        res.render("admins/products/edit.ejs", {
            prods: Product.findById(productId) ,
            pageTitle: 'Edit Product',
            path: ''
        });        
    }

    static update(req, res){
        const index = Product.findByIdex(req.params.id); 
        Product.data[index].title = req.body.title;
        Product.data[index].imageUrl = req.body.imageUrl;
        Product.data[index].description = req.body.description;
        Product.data[index].price = req.body.price;
        Product.update();
        res.redirect("/admins/products");
    } 

    static destroy(req, res){ 
        Product.deleteById(req.params.id);
        Product.update();
        res.redirect("/admins/products");
    } 

    
}


export default ProductController ;