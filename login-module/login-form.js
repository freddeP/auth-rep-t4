module.exports = function(req,res){

    res.send(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>login-form</title>

    <style>
        *{
            box-sizing: border-box;
            font-family: monospace;
            margin:0;
            padding:0;
        }
        input{
            display:block;
            width:100%;
            padding:2%;
        }
        
    </style>

</head>
<body>

    <form action="/login" method="post">
        <input value = "lars@lars.se" type="email" name="email" placeholder="email" required>
        <input value = "måndag" type="password" name="password" placeholder="password" required>
        <input type="submit" value="login">
    
    </form>
    
</body>
</html> 
    
    `);


}