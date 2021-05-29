const { Router } = require('express');
const DataRoutes = require('./data');

const router = Router();

router.use('/search', DataRoutes);

module.exports = router;