const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
require('dotenv').config();

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(__dirname+"/public"));

require('./login-module/login-routes')(app);

const port = process.env.PORT || 3900;
app.listen(port,()=>console.log(port));

