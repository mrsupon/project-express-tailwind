
//import AdminsProductController from "../controllers/admins/productController.js";


class Route{
        static start(app){

            app.get("/",(req, res)=>{res.render('example/index.ejs');});
            app.get("/layout2",(req, res)=>{res.render('example/layout_2_col.ejs');});
            app.get("/layout3",(req, res)=>{res.render('example/layout_fixed.ejs');});  
  
        }
}


export default Route ;
 
