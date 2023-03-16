module.exports={
    CityRepository:require( './city-repository')  // now if we have more than one repository,
                                                  // than we can require it here itself and 
                                                  // than reuire these simply as object names in service folder
                                                  // this is a cleaner way of importing files  
}