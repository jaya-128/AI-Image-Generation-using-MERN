const express = require('express');
const { generateImage, getUserImages } = require('../controllers/apiController');
const { verifyToken } = require('../middlewares/authMiddleware'); 

const router = express.Router();

router.post('/generate-image', verifyToken, generateImage); 

router.get('/user-images', verifyToken, getUserImages); 

module.exports = router;
