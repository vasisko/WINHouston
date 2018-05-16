console.log("in users.js file");
var db = require("../models");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;






router.post('/register', function (req, res) {
    console.log(req.body);
    console.log('register');
    res.send('register');
});

router.get('/' , function (req, res) {
    console.log(req.body);
    console.log('/route was hit resource.js line 23');
    res.send('/route was hit resource.js line 24');
});





module.exports = router;