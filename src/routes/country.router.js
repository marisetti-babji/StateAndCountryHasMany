var express = require('express');
var router = express.Router();

const controllerCountries = require('../controllers/country.controllers')
 const validationCountries = require('../validation/country.validation')

 router.post('/postCountryDetails',validationCountries.countryReqBodyValidate,controllerCountries.createCountryDetailsRequest);
 router.put('/:id',validationCountries.coutryUpdateReqBodyValidate,controllerCountries.updateCountryDetailsRequest);
 router.get('/getAll',validationCountries.coutryGetAllReqBodyValidate,controllerCountries.getAllCountryDetailRequest);
 router.get('/:countryName',validationCountries.countryGetJoinBodyValidation,controllerCountries.getCountryAndStateDetailsRequest);
 
module.exports = router;
