console.log("in users.js file");

var express = require('express');
var router = express.Router();

//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user.js');

router.get('/register', function (req, res) {
    res.render('register');
});

router.get('/login', function (req, res) {
    res.render('login');
});

//Incoming form data
console.log("Here line 20");
router.post('register', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    console.log("Here line 27");
    //validate inputs
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'User name is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
    console.log("Here line 34");
    var errors = req.validationErrors();

    if (errors) {
        res.render('/register', {
            errors: errors
        });
    }
    else {
        var newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        });
        User.createUser(newUser, function (err, user) {
            if (err) throw err;
            console.log(user);
        });
        req.flash('success_msg', 'You are registered and can now login');
        res.redirect('/users/login');
    }
});
module.exports = router;
