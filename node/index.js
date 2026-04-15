// const express = require('express');
import express from 'express';

import cors from 'cors';
import 'dotenv/config';
// const db = require('./config/database');
import db from './config/database.js';
import productRoute from './routes/productRoutes.js';
import userRoute from './routes/userRoutes.js';
import cartRoutes from './routes/cartRoutes.js';



const app = express();

app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(express.json());



app.use('/api/products', productRoute);
app.use('/api/user' , userRoute);
app.use('/api/cart' , cartRoutes);





const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is Running  !!");
});