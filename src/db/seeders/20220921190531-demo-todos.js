'use strict';
const {QueryInterface} = require('sequelize');
module.exports = {
  async up (queryInterface = new QueryInterface(), Sequelize) {
    
     await queryInterface.bulkInsert(
       "Todos",
       [
         {
           title: "Finish hw",
           description: "SOA hw",
         },
         {
           title: "Buy milk",
           description: "Buy three bottles",
         },
       ],
       {}
     );
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Todos', null, {});
  }
};
