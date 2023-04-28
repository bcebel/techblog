const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const responseRoutes = require('./responseRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/response', responseRoutes)

module.exports = router;
