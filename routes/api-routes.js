// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/resources/", function(req, res) {
    db.Resource.findAll({})
      .then(function(dbResource) {
        res.json(dbResource);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/resources/category/:category", function(req, res) {
    db.Resource.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbResource) {
        res.json(dbResource);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/resources/:id", function(req, res) {
    db.Resource.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbResource) {
        res.json(dbResource);
      });
  });

  // POST route for saving a new post
  app.post("/api/resources", function(req, res) {
    console.log(req.body);
    db.Resource.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbResource) {
        res.json(dbResource);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/resources/:id", function(req, res) {
    db.Resource.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbResource) {
        res.json(dbResource);
      });
  });

  // PUT route for updating posts
  app.put("/api/resources", function(req, res) {
    db.Resource.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbResource) {
        res.json(dbResource);
      });
  });
};

