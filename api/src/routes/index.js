const { Router } = require('express');
const UsersRoutes = require('./users');
const RepositoriesRoutes = require('./repositories')
const router = Router();

router.use('/users', UsersRoutes);
router.use('/repositories', RepositoriesRoutes);
module.exports = router;