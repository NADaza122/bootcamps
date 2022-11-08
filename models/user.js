'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    //ELANZAR LOS ATRIBUTOS CON VALIDACIONES
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Los caracteres digitados deben ser solo letras'
        } ,        
        notEmpty: {
          args: true,
          msg: 'El campos nombre no puede estar vacio'
        },
        notNull: {
          args: true,
          msg: 'El atributo nombre no se mando'
        } 
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'El atributo email debe ser del formato (foo@bar.com)'
        } ,        
        notEmpty: {
          args: true,
          msg: 'El campo email no puede estar vacio'
        },
        notNull: {
          args: true,
          msg: 'El atributo email no se mando'
        } 
      }
    },
    password:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [5,10],
          msg: 'El atributo password debe ser de minímo 5 caracteres y maxímo 10 caracteres'
        },     
        notEmpty: {
          args: true,
          msg: 'El campo password no puede estar vacio'
        },
        notNull: {
          args: true,
          msg: 'El atributo password no se mando'
        } 
      }
    },


  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};