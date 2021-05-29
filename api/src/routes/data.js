const { Router } = require("express");
const router = Router();
const {getData, cache} = require('../controllers/data')

router.post("/",cache, getData);

module.exports = router;
