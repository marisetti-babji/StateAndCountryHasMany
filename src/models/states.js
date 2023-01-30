module.exports = (sequelize, DataTypes) => {
  const states = sequelize.define(
    "states",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        default: 1,
      },
      stateNames: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,
      },
      code: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allownull: false,
      },
      countryId: {
        type: DataTypes.INTEGER,
        allownull: false,
        foreignKey: true,
      },
    },
    { timestamps: false }
  );
  //association
  states.associate = function (models) {
    states.belongsTo(models.countries, { 
      foreignKey: "countryId",
    });
  };
  return states;
};
