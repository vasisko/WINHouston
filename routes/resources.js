console.log("in users.js file");
var db = require("../models");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.post('/register', function (req, res) {
    console.log(req.body);
    console.log('register');
    res.send('register');
});

// router.get('/' , function (req, res) {
//     console.log(res.body);
    
//     // console.log(req.body.name);
//     // console.log('/route was hit resource.js line 23')
//     // res.send('members')
//     // console.log(db.resources);
//     // // .then(function(dbPost) {
//     // //   res.json(dbPost);
//     // //  res.send(req.params.name);
//     // //  console.log(req.body.name);
//     // //  });
// });

router.get("/resources", function(req, res) {
    db.Resource.findAll({}).then(function(dbResource) {
        console.log(dbResource);
        res.json(dbResource);
      
    });
  });


module.exports = router;