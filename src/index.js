const express=require('express');
const bodyparser=require('body-parser');
const {PORT} = require('./config/serverConfig.js');
const CityRepository=require('./repositories/city-repository')

const setupAndStartServer=async function () {
    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    
    app.listen(PORT,async ()=> {
        console.log(`server started with ${PORT}`);
        const repo=new CityRepository();
        repo.createCity({name:"Bhopal"});
    })
}

setupAndStartServer();

