var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/User');

mongoose.connect('mongodb://localhost/angulartest');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Get all users
router.get('/users', function(req, res, next) {
    user.find(function(err, users) {
        if (err)
        {
            next(err);
        }
        else
        {
            res.send(users); 
        }
    });
});

// Get a user by his ID
router.get('/users/:userId', function(req, res, next) {
    user.find({_id: req.params.userId}, function(err, users) {
        if (err)
        {
            next(err);
        }
        else
        {
            res.send(users); 
        }
    });
});

// Create a new user
/*router.post('/users', function(req, res, next) {
    mongoose.connect('mongodb://localhost/angulartest');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        user.find(function(err, users) {
            if (err)
            {
                next(err);
            }
            else
            {
                res.send(users); 
            }
        });
    });
});

// Update a user
router.post('/users/:userId', function(req, res, next) {
    mongoose.connect('mongodb://localhost/angulartest');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        user.find(function(err, users) {
            if (err)
            {
                next(err);
            }
            else
            {
                res.send(users); 
            }
        });
    });
});

// Delete a user
router.get('/users', function(req, res, next) {
    mongoose.connect('mongodb://localhost/angulartest');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        user.find(function(err, users) {
            if (err)
            {
                next(err);
            }
            else
            {
                res.send(users); 
            }
        });
    });
});*/

module.exports = router;