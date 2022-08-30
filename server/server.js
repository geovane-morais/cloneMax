const express = require('express');
const application = express();
const port = 3333;
const path = require('path');
const bodyParser = require('body-parser');

application.use('/public',express.static(path.join(__dirname,"/../react/public")));
application.use(bodyParser.urlencoded({ extended:true }));
application.use(bodyParser.json());

const connectionDB =  require('../dataBase/dbConnection');
connectionDB.connect();


application.get('/', (req,res) => {
    res.redirect("/public/index.html")
    res.end();
});

application.post('/authenticate', (req,res) => {
        /*select id,name,cast(aes_decrypt(pass,'cloneMax')as CHAR(30)) as pass from cloneMax.users*/
        connectionDB.query(`SELECT * FROM users WHERE mail="${req.body.mail}" AND pass=aes_encrypt("${req.body.password}",'cloneMax');`, 
        function (error, results, fields) {
            if (error) throw error;
            console.log(results);
        });
      
    console.log(req.body);
    res.end();
});

application.listen(port,(err)=>{
    if (err) console.log(err);
    console.log(`\n****App rodando na porta:${port}****\n`);
});