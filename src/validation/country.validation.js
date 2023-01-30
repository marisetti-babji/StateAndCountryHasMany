const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = require("http-status");
const joi = require("joi");
//create schema
const createCountrySchema = joi.object().keys({
  countryName: joi.string().alphanum().required(),
  status: joi.number().integer().min(1).required(),
  code: joi.string().required(),
  mobileCode: joi.string().min(1).required(),
});

const countryReqBodyValidate = async (req, res, next) => {
  try {
    const { error, value } = await createCountrySchema.validate(req.body);
    console.log(error, value);
    if (error) {
      return res.status(BAD_REQUEST).send(error);
    }
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: "error_in_joi_validate" });
  }
};

//updateCountrySchema

const updateCountrySchema = joi.object().keys({
  id: joi.number().integer().required().positive().messages({
    "number.integer": "id should be an integer",
    "number.negative": "id should be an positive integer",
  }),
});

const coutryUpdateReqBodyValidate = async (req, res, next) => {
  try {
    const { error, value } = await updateCountrySchema.validate(req.body);
    console.log(error, value);
    if (error) {
      return res.status(200).send(error);
    }
    next();
  } catch (error) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: "error_in_joi_validate" });
  }
};

//getCountrySchema

const getCountrySchema = joi.object().keys({
  countryName: joi.string().required().messages({
    "string.alphanum": "countryName should be an String",
  }),
});

const countryGetJoinBodyValidation = async (req, res, next) => {
  try {
    const { err, value } = await getCountrySchema.validate(req.body);
    console.log(value);
    if (err) {
      return res.status(BAD_REQUEST).send(err);
    }
    next();
  } catch (err) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .send({ err: "error_in_joi_validate" });
  }
};

//getAllCountrySchema
const getAllCountrySchema = joi.object().keys({
  id: joi.number().required().optional().messages({
    "number.integer": "id should be an integer",
    "number.negative": "id should be an positive integer",
  }),
});
const coutryGetAllReqBodyValidate = async (req, res, next) => {
  try {
    const { error, value } = await getAllCountrySchema.validate(req.body);
    console.log(value);
    if (error) {
      return res.status(200).send(error);
    }
    next();
  } catch (error) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: "error_in_joi_validate" });
  }
};

module.exports = {
  countryReqBodyValidate,
  coutryUpdateReqBodyValidate,
  countryGetJoinBodyValidation,
  coutryGetAllReqBodyValidate,
};
