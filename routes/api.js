const express = require('express');
const router = new express.Router();

const apiController = require('../controllers/apiController');


router.get('/api/fetch', apiController.fetchAll);

router.get('/api/fetch/:bank', apiController.fetchBank);

module.exports = router;