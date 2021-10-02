const express = require('express');
const router  = express.Router();

const authController = require('../controllers/authController'); 

router.post('/auth/gettoken', authController.get_token); 

module.exports = router;