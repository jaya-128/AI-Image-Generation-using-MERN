const express = require('express');
const { register, login } = require('../controllers/authController');
const { getProfile, updateProfile } = require('../controllers/profileController');
const { verifyToken } = require('../middlewares/authMiddleware');  

const router = express.Router();


router.post('/register', register);


router.post('/login', login);


router.get('/profile', verifyToken, getProfile);


router.post('/profile', verifyToken, updateProfile);

module.exports = router;
