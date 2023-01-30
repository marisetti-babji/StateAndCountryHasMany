const dbconfig = require("./dbconfig");
const { Sequelize } = require("sequelize");
var path = require("path");

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.Host,
  dialect: dbconfig.DIALECT,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

//dbconnection loop

var filesArray = ["../models/countries", "../models/states"];
const db = {};

filesArray.forEach((file) => {
  var model = require(path.join(__dirname, file))(
    sequelize,
    Sequelize.DataTypes
  );
  // console.log("model", model);
  db[model.name] = model;
});
Object.keys(db).forEach((modelName) => {
  console.log(db[modelName]);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;

db.sequelize = sequelize;

sequelize.sync({ force: false }).then(() => {
  console.log("tables created");
});
module.exports = db;
