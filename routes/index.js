const express = require('express');
const authRoutes = require('./authRoutes');
const profileRoutes = require('./profileRoutes');
const apiRoutes = require('./apiRoutes');

const router = express.Router();


router.use(authRoutes);

router.use(profileRoutes);


router.use(apiRoutes);

module.exports = router;
