console.log("in users.js file");
var db = require("../models");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;

// var User = require('../models/user.js');

router.get('/register', function (req, res) {
    res.render('register');
});

router.get('/login', function (req, res) {
    res.render('login');
});
router.get('/members', function (req, res){
    res.render('members');
})
//add router.post for log in
//Incoming form data
console.log("Here line 20");
//create variables for each parameter received from form
router.post('/register', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    console.log(req.body);
    //validate inputs usimg express-validate
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'User name is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
    console.log("Here line 34");

    var errors = req.validationErrors();

    if (errors) {
        console.log(errors);
        // if errors in form, return user to registration page to resubmit 
        res.render('register', {
            //display errors above form...errors displayed via register.handlebars
            errors: errors
        });
    }
    else {

        var somePassword = req.body.password;

        var createPassword = function (string) {
            console.log('starting bcrypt to create password');
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(somePassword, salt, (err, hash) => {
                    if (err) throw err;
                    somePassword = hash;
                    console.log(somePassword);//***this works to here
                })
            });

        }

        createPassword(somePassword);
        console.log(somePassword);//***does not make it here

        // // create user in DB  --- this code writes user data to DB table
        db.User.create({
            name: req.body.name,
            username: req.body.name,
            email: req.body.email,
            password: somePassword
        }).then(function (dbUser) {
            //  Msg to post on login page:
            req.flash('success_msg', 'You are registered and can now login');

            res.redirect('/users/login');
        });



    }
});
//Here
router.post('/login', function (req, res) {
    
    var username = req.body.username;
    var password = req.body.password;
    

    console.log(req.body);
    //validate inputs usimg express-validate
    
    req.checkBody('username', 'User name is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        console.log(errors);
        // if errors in form, return user to registration page to resubmit 
        res.render('login', {
            //display errors above form...errors displayed via register.handlebars
            errors: errors
        });
    }
    else {

     

        // // create user in DB  --- this code writes user data to DB table
            //  Msg to post on login page:
            req.flash('success_msg', 'You are registered and can now login');

            res.redirect('/users/members');
    }
        });
    
module.exports = router;
