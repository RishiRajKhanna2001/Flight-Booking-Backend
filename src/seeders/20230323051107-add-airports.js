'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
           name:"JBL1 Airport",
           createdAt:new Date(),
           updatedAt:new Date(),
           cityId:9
      },
      {
         name:"JBL2 Airport",
         createdAt:new Date(),
         updatedAt:new Date(),
         cityId:9
      },
      {
           name:"JBL3 Airport",
           createdAt:new Date(),
           updatedAt:new Date(),
           cityId:9
      },
      {
           name:"BTL1 Airport",
           createdAt:new Date(),
           updatedAt:new Date(),
           cityId:10
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
