const joi = require("joi");

const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = require("http-status");

//createStateSchema
const createStateSchema = joi.object().keys({
  stateNames: joi.string().alphanum().required(),
  code: joi.string().min(1).required(),
  status: joi.number().integer().min(1).required(),
  countryId: joi.number().integer().min(1).required(),
});

const stateBodyReqValidate = async (req, res, next) => {
  try {
    const { error, value } = await createStateSchema.validate(req.body);
    console.log(error, value);
    if (error) {
      return res.status(BAD_REQUEST).send(error);
    }
    next();
  } catch (error) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: "error_in_joi_validate" });
  }
};
//updateStateSchema
const updateStateSchema = joi.object().keys({
  id: joi.number().required().positive().messages({
    "number.integer": "id should be an integer",
    "number.negative": "id should be an positive integer",
  }),
});
const stateBodyUpdateReqValidate = async (req, res, next) => {
  try {
    const { error, value } = await updateStateSchema.validate(req.body);
    console.log(error, value);
    if (error) {
      return res.status(BAD_REQUEST).send(error);
    }
    next();
  } catch (error) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: "error_in_joi_validate" });
  }
};
// //getStateSchema

const getStateSchema = joi.object().keys({
  stateName: joi.string().required().messages({
    "string.alphanum": "stateName should be an numaric",
  }),
});

const stateGetJoinReqValidate = async (req, res, next) => {
  try {
    const { error, value } = await getStateSchema.validate(req.body);
    if (error) {
      return res.status(BAD_REQUEST).send(error);
    }
    next();
  } catch (error) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: "error_in_joi_validate" });
  }
};
//getAllStateSchema

const getAllStateSchema = joi.object().keys({
  id: joi.number().required().optional().messages({
    "number.integer": "id should be an integer",
    "number.negative": "id should be an positive integer",
  }),
});

const stateBodyGetAllReqValidate = async (req, res, next) => {
  try {
    const { error, value } = await getAllStateSchema.validate(req.body);
    console.log(value);
    if (error) {
      return res.status(BAD_REQUEST).send(error);
    }
    next();
  } catch (error) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .send({ error: "error_in_joi_validate" });
  }
};

module.exports = {
  stateBodyReqValidate,
  stateBodyUpdateReqValidate,
  stateGetJoinReqValidate,
  stateBodyGetAllReqValidate,
};
