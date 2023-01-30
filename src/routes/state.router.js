const express =require('express')
const router =express.Router();

const controllerStates =require('../controllers/state.controllers')
 const validationStates = require('../validation/states.validation');


router.post('/postStatesDetails',validationStates.stateBodyReqValidate,controllerStates.createStateDetailsRequest);
router.put('/:id',validationStates.stateBodyUpdateReqValidate,controllerStates.updateStateDetailsRequest)
router.get('/getStatesList',validationStates.stateBodyGetAllReqValidate,controllerStates.getStatesListDetailsRequest)
router.get('/:stateName',controllerStates.getStatesAndCountryDetailsRequest)

module.exports = router;