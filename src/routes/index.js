var express = require("express");
var router = express.Router();

const countryRouter = require("../routes/country.router");
const stateRouter = require("../routes/state.router");

const routing = [
  {
    path:'/countries',
    router:countryRouter,
  },
  {
    path:'/states',
    router:stateRouter,
  },
];

routing.forEach((route) => {
  router.use(route.path, route.router);
});

module.exports = router;
