var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET ALL CALENDAR EVENTS */
router.get('/', function(req, res, next) {
    res.send('Endpoint works!');
});

module.exports = router;
