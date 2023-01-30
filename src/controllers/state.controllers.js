const stateServices = require("../services/states.services");
const httpStatus = require("http-status");

const createStateDetailsRequest = async (req, res) => {
  try {
    const stateNames = req.body.stateNames;
    const code = req.body.code;
    const status = req.body.status;
    const countryId = req.body.countryId;

    const result = await stateServices.createStateDetails(
      stateNames,
      code,
      status,
      countryId
    );
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    switch (err) {
      case "stateDetails is Required":
        res
          .status(400)
          .send({ sucess: false, err: "state Details is Required!" });
        break;
      default:
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        break;
    }
  }
};

//updateStateDetailsRequest

const updateStateDetailsRequest = async (req, res) => {
  try {
    const id = req.params.id;
    const postJSON = req.body;

    const result = await stateServices.updateStatesDetails(id, postJSON);
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    switch (err) {
      case "state id is required":
        res.status(400).send({ success: false, err: "state id is required!" });
        break;
      default:
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        break;
    }
  }
};
// //getStatesAndCountryDetailsRequest

const getStatesAndCountryDetailsRequest = async (req, res) => {
  try {
    const stateName = req.params.stateName;

    const result = await stateServices.getStatesAndCountryDetails(stateName);
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    switch (err) {
      case "state name is required":
        res
          .status(400)
          .send({ success: false, err: "state name is required!" });
        break;
      default:
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        break;
    }
  }
};
// //getAllStateDetailsrequest

const getStatesListDetailsRequest = async (req, res) => {
  try {
    const result = await stateServices.getAllStateDetails();
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    console.log(err);
    switch (err) {
      case "state details is required":
        res
          .status(400)
          .send({ success: false, err: "state details is required!" });
        break;
      default:
        res.send(httpStatus.INTERNAL_SERVER_ERROR);
        break;
    }
  }
};
module.exports = {
  createStateDetailsRequest,
  updateStateDetailsRequest,
  getStatesAndCountryDetailsRequest,
  getStatesListDetailsRequest,
};
