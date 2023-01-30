const httpStatus = require("http-status");
const countryServices = require("../services/country.services");

//create country details
const createCountryDetailsRequest = async (req, res) => {
  try {
    const countryName = req.body.countryName;
    const status = req.body.status;
    const code = req.body.code;
    const mobileCode = req.body.mobileCode;

    const result = await countryServices.createCountryDetails(
      countryName,
      status,
      code,
      mobileCode
    );
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    switch (error) {
      case "country details is required":
        res
          .status(400)
          .send({ sucess: false, error: "CountryDetails is required!" });
        break;
      default:
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
        break;
    }
  }
};

// updateCountryDetailsRequest

const updateCountryDetailsRequest = async (req, res) => {
  try {
    const id = req.params.id;

    const postJSON = req.body;

    const result = await countryServices.updateCountyDetails(id, postJSON);
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    switch (err) {
      case "country id is required":
        res
          .status(200)
          .send({ success: false, err: "country id is required!" });
        break;
      default:
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        break;
    }
  }
};

// //getCountryAndStateDetailsRequest

const getCountryAndStateDetailsRequest = async (req, res) => {
  try {
    const countryName = req.params.countryName;

    const result = await countryServices.getCountryAndStateDetails(countryName);
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    switch (err) {
      case "country name is required":
        res
          .status(400)
          .send({ success: false, err: "country name is required!" });
        break;
      default:
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
        break;
    }
  }
};

//getAllCountryDetailsRequest

const getAllCountryDetailRequest = async (req, res) => {
  try {
    const result = await countryServices.getAllCountryDetails();
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    switch (err) {
      case "country details is required":
        res
          .status(400)
          .send({ success: false, err: "country details is required!" });
        break;
      default:
        res.send(httpStatus.INTERNAL_SERVER_ERROR);
        break;
    }
  }
};

module.exports = {
  createCountryDetailsRequest,
  updateCountryDetailsRequest,
  getCountryAndStateDetailsRequest,
  getAllCountryDetailRequest,
};
