const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      get(){
        const rawValue = this.getDataValue('name');
      return rawValue ? rawValue.charAt(0).toUpperCase() + rawValue.slice(1).toLowerCase() : null;
      },
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING
    },
    heightMin: {
      type: DataTypes.STRING
    },
    heightMax: {
      type: DataTypes.STRING
    },
    weightMin: {
      type: DataTypes.STRING
    },
    weightMax: {
      type: DataTypes.STRING
    },
    life_span: {
      type: DataTypes.STRING
    },
  },{timeStamps: false})
};
