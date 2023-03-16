const {CityService}=require('../services/index');

// we will be segregating out all the controllers here , and for routes and middlewares ,
// we will segregate out them in their respective folders 

const cityService=new CityService();

const create=async (req,res)=>{
    try {
         const city=cityService.createCity(req.body);
         return res.status(200).json({
         data:city,
         success:true,
         message:"created city successfully",
         error:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"error in creating city",
            error:error
        })
    }
};

// PATCH -> /city/:id
const update=async (req,res)=>{
    try {
        const response=cityService.getCity(req.params.id,req.body);
        return res.status(200).json({
        data:response,
        success:true,
        message:"updated city successfully",
        error:{}
       })
   } catch (error) {
        console.log(error);
        return res.status(500).json({
        data:{},
        success:false,
        message:"error in updating city",
        error:error
       })
   }
};

// DELETE -> /city/:id
const destroy=async (req,res)=>{
    try {
        const response=cityService.deleteCity(req.params.id);
        return res.status(200).json({
        data:response,
        success:true,
        message:"deleted city successfully",
        error:{}
       })
   } catch (error) {
        console.log(error);
        return res.status(500).json({
        data:{},
        success:false,
        message:"error in deleting city",
        error:error
       })
   }
};

// GET -> /city/:id
const get=async (req,res)=>{
    try {
        const response=cityService.getCity(req.params.id);
        return res.status(200).json({
        data:response,
        success:true,
        message:"fetched city successfully",
        error:{}
       })
   } catch (error) {
        console.log(error);
        return res.status(500).json({
        data:{},
        success:false,
        message:"error in fetching city",
        error:error
       })
   }
}