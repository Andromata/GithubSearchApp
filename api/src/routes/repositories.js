const { Router } = require("express");
const router = Router();
const {getRepositories} = require('../controllers/repositories')

router.get("/", getRepositories);

module.exports = router;