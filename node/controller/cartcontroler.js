import db from '../config/database.js'

export const AddToCart = (req, res) => {
    const { product_id, user_id, quantity } = req.body;

    const sql = "INSERT INTO cart (user_id,product_id,quantity,created_at) VALUES (?,?,?, NOW())";
    db.query(sql, [user_id, product_id, quantity], (err, result) => {
        if (err) {
            return res.json({
                status: false,
                message: "Unable to add to ! "
            });

        }
        else {
            return res.json({
                status: true,
                message: "Product added to cart"
            });
        }
    })
}