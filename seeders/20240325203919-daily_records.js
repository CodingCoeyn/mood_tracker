'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('daily_records', [{
      ratingId: 3,
      mood: 'Happy',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ratingId: 5,
      mood: 'Sad',
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date()
    },{
      ratingId: 6,
      mood: 'Tired',
      createdAt: new Date("2024-01-19"),
      updatedAt: new Date()
    },{
      ratingId: 4,
      mood: 'Happy',
      createdAt: new Date("2023-12-29"),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('daily_records', null, {});
  }
};
