const db = require("../config/connection");

//createStateDetails
const createStateDetails = async (stateNames, code, status, countryId) => {
  try {
    if (!stateNames || !code || !status || !countryId) {
      throw "stateDetails is Required";
    }
    let postDetails = {
      stateNames: stateNames,
      code: code,
      status: status,
      countryId: countryId,
    };
    const post = await db.states.create(postDetails);
    return post;
  } catch (err) {
    throw err;
  }
};

// updateStatesDetails

const updateStatesDetails = async (id, postJSON) => {
  try {
    if (!id) {
      throw "state id is required";
    }
    const put = await db.states.update(postJSON, { where: { id: id } });
    return put;
  } catch (err) {
    throw err;
  }
};

//getStatesAndCountryDetails

const getStatesAndCountryDetails = async (stateName) => {
  try {
    if (!stateName) {
      throw "state name is required";
    }

    const getNames = await db.states.findOne({
      attributes: ["stateNames"],
      include: [
        {
          model: db.countries,
          attributes: ["countryName","status","mobileCode"],
        },
      ],
      where: { stateNames: stateName },
    });
    return getNames;
  } catch (err) {
    throw err;
  }
};

// //getAllStateDetails

const getAllStateDetails = async () => {
  try {
    const findall = await db.states.findAll();
    if (!findall) {
      throw "state details is required";
    }
    return findall;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
module.exports = {
  createStateDetails,
  updateStatesDetails,
  getStatesAndCountryDetails,
  getAllStateDetails,
};
