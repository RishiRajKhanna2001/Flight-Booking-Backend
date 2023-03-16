const express=require('express');
const router=express.Router();

const v1ApiRoutes=require('./v1/index');

router.use('/v1',v1ApiRoutes);    // mapping is being done of routes starting with v1 to the service inside v1 folder

module.exports=router;