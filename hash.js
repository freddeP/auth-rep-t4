const bcrypt = require("bcryptjs");




bcrypt.hash("måndag",12,(err,hash)=>{

    console.log(hash);

});
