var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Event = require('../models/Event.js');

/* GET ALL CALENDAR EVENTS */
router.get('/', function(req, res, next) {
  Event.find(function(err, products) {
    if (err)
      return next(err);
    res.json(products);
  });
});

/* GET SINGLE CALENDAR EVENT BY ID */
router.get('/:id', function(req, res, next) {
    Event.findById(req.params.id, function(err, post) {
        if (err)
            return next(err);
        res.json(post);
    })
})

/* CREATE CALENDAR EVENT */
router.post('/', function(req, res, next) {
    Event.create(req.body, function(err, post) {
        if (err)
            return next(err);
        res.json(post);
    })
})

/* DELETE CALENDAR EVENT */
router.post('/:id', function(req, res, next) {
    Event.findByIdAndDelete(req.params.id, req.body, function(err, post) {
        if (err)
            return next(err);
        res.json(post);
    })
})

module.exports = router;
