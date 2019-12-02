module.exports = async function(req,res){

    const users = require("./users");
    const bcrypt = require("bcryptjs");
    const secret = process.env.secret;
    const jwt = require("jsonwebtoken");

    const userExists = users.filter(user=> user.email === req.body.email);

    if(userExists.length===1)
    {
        try {
            const pwCheck = await bcrypt.compare(req.body.password,userExists[0].password);
            if(pwCheck){

                const token = jwt.sign(
                    {uid:userExists[0].id,
                    admin:false,
                    email:userExists[0].email}
                ,secret,{expiresIn:120});

                res.cookie('token',token,{httpOnly:true,sameSite:'strict'});
                res.send("loggin success");
            }
            else{
                res.redirect("/login?mes=loginError");
            }

        } catch (error) {
            res.send(error.message);
        }
   


    }
    else{

        res.redirect("/login?mes=loginError");

    }
    






}