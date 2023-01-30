module.exports = (sequelize, DataTypes) => {
  const countries = sequelize.define(
    "countries",
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        default: 1,
      },
      countryName: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allownull: false,
      },
      code: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,
      },
      mobileCode: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );

  //associations
  countries.associate = function (models) {
    countries.hasMany(models.states, {
     
    });
  };
  return countries;
};
