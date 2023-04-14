'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios.init({
    nome: DataTypes.STRING(100),
    email: DataTypes.STRING(200),
    senha: DataTypes.STRING(512),
    data_nascimento: DataTypes.DATEONLY,
    status: DataTypes.CHAR(1)
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};