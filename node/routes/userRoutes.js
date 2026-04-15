import express from 'express';
import { UserLogin, UserRegister } from '../controller/userController.js';


const routes = express.Router();

// /api/products/:id
routes.post('/login' , UserLogin);
routes.post('/register' , UserRegister);


export default routes;