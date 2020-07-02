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
      // memberId: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Members',
      //     key: 'id'
      //   },
      //   onDelete: 'cascade',
      //   onUpdate: 'cascade'
      // },
      // bookId: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Books',
      //     key: 'id'
      //   },
      //   onDelete: 'cascade',
      //   onUpdate: 'cascade'
      // },
      borrowed_date: {
        allowNull: false,
        type: Sequelize.INTEGER
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