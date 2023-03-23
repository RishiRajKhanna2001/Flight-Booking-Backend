const express=require('express');
const bodyparser=require('body-parser');
const {PORT} = require('./config/serverConfig.js');
const ApiRoutes=require('./routes/index');

const {Airport,City}=require('./models/index');
const db=require('./models/index');

const setupAndStartServer=async function () {

    //create express object
    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);
    
    app.listen(PORT,async ()=> {
        console.log(`server started with ${PORT}`);
         if(process.env.SYNC_DB)
         {
            db.sequelize.sync({alter:true}); // doing db synchronization
         }

        // const city=await City.findOne({
        //     where:{
        //         id:9
        //     }
        // });
        // const airports=await city.getAirports();
        // console.log(city,airports);

    })
}

setupAndStartServer();

