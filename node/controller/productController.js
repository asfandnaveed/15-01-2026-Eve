import db from '../config/database.js';


export const GetAllProducts = (req, res) => {

    const sql = "SELECT * FROM products";

    db.query(sql, (err, result) => {

        if (err) {
            res.json({
                status: false,
                message: "Unable to Fetch Products ! "
            });
        } else {
            res.json({
                status: true,
                message: "Products Data !",
                products: result
            });
        }
    });
};

export const GetProductDetail = (req , res)=>{

    const productID = req.params.id;

    const sql = "SELECT * FROM products WHERE id=?";

    db.query(sql, [productID], (err, result) => {

        if (err) {
            res.json({
                status: false,
                message: "Unable to Fetch Product Detail ! "
            });
        } else {
            res.json({
                status: true,
                message: "Product Detail Data !",
                product: result[0]
            });
        }
    });

};