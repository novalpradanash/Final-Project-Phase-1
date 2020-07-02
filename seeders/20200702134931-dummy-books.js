'use strict';
const fs = require ('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = JSON.parse(fs.readFileSync('./data/books.json', 'utf8'))
   data = data.map(el => {
     el.createdAt = new Date()
     el.updatedAt = new Date()

     return el;
   })
   return queryInterface.bulkInsert(
     'Books',
     data,
     {}
   );
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(
      'Books',
      null,
      {}
    );
  }
};
