import express from 'express';
import { GetAllProducts, GetProductDetail } from '../controller/productController.js';


const routes = express.Router();

// /api/products/:id
routes.get('/' , GetAllProducts);
routes.get('/detail/:id' , GetProductDetail);


export default routes;