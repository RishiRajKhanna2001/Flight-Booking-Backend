const express=require('express');
const {PORT} = require('./config/serverConfig')
const setupAndStartServer=async function () {
    const app=express();
    
    app.listen(PORT,function () {
        console.log(`server started with ${PORT}`);
        // console.log(process);
    })
}

setupAndStartServer();