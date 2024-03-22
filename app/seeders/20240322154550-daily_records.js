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
    return queryInterface.bulkInsert('daily_records', [{
      ratingId: 3,
      mood: 'Happy',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      ratingId: -1,
      mood: 'Sad',
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date()
    },{
      ratingId: -2,
      mood: 'Tired',
      createdAt: new Date("2024-01-19"),
      updatedAt: new Date()
    },{
      ratingId: 0,
      mood: 'Happy',
      createdAt: new Date("2023-12-29"),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('daily_records', null, {});
  }
};
