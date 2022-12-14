const DataTypes = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "types",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
