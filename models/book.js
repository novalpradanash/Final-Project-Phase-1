'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsToMany(models.Member, {through: models.Transaction})
    }
  };
  Book.init({
    name: DataTypes.STRING,
    isbn: DataTypes.STRING,
    released_year: DataTypes.INTEGER,
    author: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};