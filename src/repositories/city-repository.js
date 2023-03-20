const { Op }= require('sequelize');
const {City} = require("../models/index");  // we are entering into index file bcz. it will going to return all
                                            // the models that are included in our models 
class CityRepository{
 async createCity({name})
 {
  try {
    const city=await City.create(
      {
        name         // can also be written as name:name
      }
    );
    return city;
  } catch (error) {
    console.log("something went wrong in repository layer");
    throw{error};
  }
 }

 async updateCity(cityId,data)
 {
 try {
    const city=await City.update(data,{ // data is the object containing new details
      where:{
        id:cityId
      }
    })
      return city;
  } catch (error) {
    console.log("something went wrong in repository");
    throw{error};
  }
 }

 async deleteCity(cityId)
 {
 try {
      await City.destroy({
      where:{
          id:cityId
      }
    }
    );
    return true;
  } catch (error) {
    console.log("something went wrong in repository");
    throw{error};
  }
 }

 async getCity(cityId)
 {
 try {
    const city=await City.findByPk(cityId); // findByPK finds through primary key
     return city;
  } catch (error) {
    console.log("something went wrong in repository");
    throw{error};
  }
 }

 async getAllCities(filter)  // filter can also be empty
 {
 try {
  if(filter.name)
  {
     const cities=await City.findAll({
      where:{
        name:{
          [Op.startsWith]:filter.name
        }
      }
     });
     return cities;
  }
    const cities=await City.findAll(); // findByPK finds through primary key
     return cities;
  } catch (error) {
    console.log("something went wrong in repository");
    throw{error};
  }
 }
}                                           

module.exports=CityRepository;
