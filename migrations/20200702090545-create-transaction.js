'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
     return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MemberId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        
      },
      BookId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      borrowed_date: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transactions');
  }
};