'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Member.belongsToMany(models.Book, {through: models.Transaction})

    }
  };
  Member.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Member',
  });
  Member.addHook('beforeCreate', (instance, options) => {
    instance.phone_number = instance.phone_number.split('')

    if (instance.phone_number[0] !== '0') {
      if (instance.phone_number[0] === '+') {
        instance.phone_number = '0'+ instance.phone_number.slice(3).join('')
      }
      else {
        instance.phone_number = '0'+ instance.phone_number.slice(2)
      }
    }
  })
  return Member;
};