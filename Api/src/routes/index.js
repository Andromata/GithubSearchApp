const { Router } = require('express');
const UsersRoutes = require('./users');
const router = Router();

router.use('/user', UsersRoutes);

module.exports = router;