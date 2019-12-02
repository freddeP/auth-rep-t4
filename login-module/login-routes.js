// funktion som hanterar login-routes
const login = require("./login");
const loginForm = require("./login-form");
const auth = require("./auth");

module.exports = function(app){

    app.get("/login",loginForm);

    app.post("/login", login);

    app.get("/secret",auth,(req,res)=>{

        res.send({id:666,obj:{name:"hinHåle",age:"very very old"}});

    })


}