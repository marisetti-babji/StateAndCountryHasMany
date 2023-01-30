const db = require("../config/connection");

//createCountryDetails
const createCountryDetails = async (countryName, status, code, mobileCode) => {
  try {
    if (!countryName || !status || !code || !mobileCode) {
      throw "CountryDetails is required";
    }
    let postDetails = {
      countryName: countryName,
      status: status,
      code: code,
      mobileCode: mobileCode,
    };
    const post = await db.countries.create(postDetails);
    return post;
  } catch (err) {
    throw err;
  }
};
//update countries
const updateCountyDetails = async (id, postJSON) => {
  try {
    if (!id) {
      throw "country id is required";
    }

    const put = await db.countries.update(postJSON, { where: { id: id } });
    return put;
  } catch (err) {
    throw err;
  }
};

//  //getCountryAndStateDetails

const getCountryAndStateDetails = async (countryName) => {
  try {
    if (!countryName) {
      throw "country name is required";
    }

    const getNames = await db.countries.findAll({
      attributes: ["countryName"],
      include: [
        {
          model: db.states,
          attributes: ["stateNames", "code", "status"],
        },
      ],
      where: { countryName: countryName },
    });
    return getNames;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

//getAllCountryDetails

const getAllCountryDetails = async () => {
  try {
    const findall = await db.countries.findAll({});

    if (!findall) {
      throw "country details is required";
    }
    return findall;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  createCountryDetails,
  updateCountyDetails,
  getCountryAndStateDetails,
  getAllCountryDetails,
};
