'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ratings', [{
        name: 'Great',
        value: 3
      },{
        name: 'Good',
        value: 2
      },{
        name: 'Fine',
        value: 1
      },{
        name: 'Okay',
        value: 0
      },{
        name: 'Blah',
        value: -1
      },{
        name: 'Unwell',
        value: -2
      },{
        name: 'Spiraling',
        value: -3
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ratings', null, {});
  }
};