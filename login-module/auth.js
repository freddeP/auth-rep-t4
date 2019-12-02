// middleware för att kolla vår token och ev hålla oss inloggade....
module.exports = function(req,res,next){

    const token = req.cookies.token;
    const jwt = require("jsonwebtoken");

    // om det finns en cookie med namnet token
    if(token)
    {
        try {
            const verified = jwt.verify(token,process.env.secret);
            req.token = verified;
            next();
        } catch (error) {
            res.send({message:"authentication required"});
        }
       


    }
    else{
        res.redirect("/login?mes=No_Token_Provided");
    }

}