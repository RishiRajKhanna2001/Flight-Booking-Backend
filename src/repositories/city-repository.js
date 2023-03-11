const {City} = require("../models/index");  // we are entering into index file bcz. it will going to return all
                                           //  the models that we are going to include in our models 

class CityRepository{
    async createCity({name}){
       try{
        const city=await City.create({name}); // to create a row    
        return city;
       }catch(error){
         throw{error};
       }
    }
    async deleteCity(cityId){
       try{
        await City.destroy({      // for deleting a row     
            where:{
                id:cityId
            }
        });
       }catch(error){
         throw{error};
       }
    }
}                                           

module.exports=CityRepository;
