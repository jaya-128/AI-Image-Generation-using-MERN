const express = require('express');
const { getProfile, updateProfile } = require('../controllers/profileController');
const { verifyToken } = require('../middlewares/authMiddleware');  

const router = express.Router();

router.get('/profile', verifyToken, getProfile);

router.post('/profile', verifyToken, updateProfile);

module.exports = router;
