const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userCtrl');

router.post('/create-user', controllers.createUser);

router.get('/get-user', controllers.getAllUser);

module.exports = router;