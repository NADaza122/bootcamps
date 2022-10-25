'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
     await queryInterface.bulkInsert('users', [
      {
        name: 'NAdaza122',
        email: 'an.daza.122n@gmail.com',
        password: '122N4095'
      },
      {
        name: 'FallonCarrignton',
        email: 'fallonunlimited1@gmail.com',
        password: 'Unlimited122'
      },
      {
        name: 'Liam',
        email: 'liamdinastyqgmail.com',
        password: 'F4110N'
      },
      {
        name: 'SamuelCarrington',
        email: 'lamirage@gmail.com',
        password: '122N4895'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) 
  {
    
    await queryInterface.bulkDelete('users', null, {});
  }
};
