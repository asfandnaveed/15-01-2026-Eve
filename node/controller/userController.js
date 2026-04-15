import db from '../config/database.js';

export const UserLogin = (req, res) => {
    const { email, pass } = req.body;

    const sql = "SELECT * FROM users WHERE email=?";

    db.query(sql, [email], (err, result) => {

        if (err) {
            return res.json({
                status: false,
                message: "Unable to login user ! "
            });
        }

        if (result.length == 0) {
            return res.json({
                status: false,
                message: "User is not Registered ! "
            });
        }

        const user = result[0];

        if (user.password != pass) {
            return res.json({
                status: false,
                message: "Invalid Password ! "
            });

        }


        res.json({
            status: true,
            message: "Login Success ! ",
            user: user
        });




    });
};


export const UserRegister = (req , res)=>{

    const {email, pass, firstname , lastname, username , address , phone , postal } =req.body;

    const checkSql = "SELECT * FROM users WHERE email=?";

    db.query(checkSql , [email] , (err , result)=>{

        if(err){
            return res.json({
                status: false,
                message: "Something  Went Wrong! "
            });
        }


        if(result.length > 0){
            return res.json({
                status: false,
                message: "Email Already Registered ! "
            });
        }


    });

    const sql = `INSERT INTO users (email , password , firstname, lastname , username , phonenumber , address, postal , created_at) 
    VALUE (?,?,?,?,?,?,?,?, NOW() )`;

    db.query(sql , [email , pass , firstname , lastname , username , phone , address , postal] , (err , result)=>{


        if(err){
            return res.json({
                status: false,
                message: "Something  Went Wrong with User Registeration ! "
            });
        }else{
            return res.json({
                status: true,
                message: "User Registered ! "
            });
        }
    });


};