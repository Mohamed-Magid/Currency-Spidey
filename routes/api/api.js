const express = require('express');
const router = new express.Router();

const apiController = require('../../controllers/apiController');
const infoController = require('../../controllers/infoController');

router.get('/api/fetch', apiController.fetchAll);

router.get('/api/fetch/:bank', apiController.fetchBank);

router.get('/api/info', infoController.all);

router.get('/api/info/:bank', infoController.specified);

router.get('*', (req, res) => res.status(404).send('404 Not Found'));

module.exports = router;