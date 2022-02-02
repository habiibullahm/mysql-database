'use strict';
const {hashPassword} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seller.hasMany(models.Product, {foreignKey:"SellerId"})
    }
  };
  Seller.init({
    name:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Name must be filled!`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Format must be email!`
        },
        notEmpty: {
          args: true,
          msg: `Email must be filled!`
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Password must be filled!`
        }
      }
    }, 
    telepon: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Name must be filled!`
        }
      }
    },
    rekening: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Name must be filled!`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Seller',
    hooks:{
      beforeCreate:(seller) =>{
        seller.password = hashPassword(seller.password);
      },
    }
  });
  return Seller;
};