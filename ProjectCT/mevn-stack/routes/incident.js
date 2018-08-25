var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var incident = require('../models/incident.js');

/* GET ALL incidentS */
router.get('/', function(req, res, next) {
  incident.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE incident BY ID */
router.get('/:id', function(req, res, next) {
  incident.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE incident */
router.post('/', function(req, res, next) {
  incident.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE incident */
router.put('/:id', function(req, res, next) {
  incident.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE incident */
router.delete('/:id', function(req, res, next) {
  incident.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
