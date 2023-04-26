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
    nome: {
      type: DataTypes.STRING(256),
      get() {
        return this.getDataValue('nome').toUpperCase()
      },
      set(value) {
        this.setDataValue('nome', value.trim())
      }
    },
    email: DataTypes.STRING(256),
    senha: DataTypes.STRING(512),
    data_nascimento: DataTypes.DATEONLY,
    status: DataTypes.CHAR(1)
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};