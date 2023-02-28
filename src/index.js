const express=require('express');
const bodyparser=require('body-parser');



const {PORT} = require('./config/serverConfig.js');


const setupAndStartServer=async function () {
    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    
    app.listen(PORT,function () {
        console.log(`server started with ${PORT}`);
        // console.log(process);
    })
}

setupAndStartServer();