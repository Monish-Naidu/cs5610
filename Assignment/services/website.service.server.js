module.exports = function (app) {
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);


  app.post("/api/user/:userId/website", createWebsite);



  var websiteModel = require('../model/website/website.model.server');


  function createWebsite(req, res) {
    const userId = req.params['userId'];
    const website = req.body;
    website._userId = userId;
   // console.log('made it to website.serice.server.js');
    websiteModel.createWebsite(userId,website)
      .then(function(website) {
        console.log('created website: ' + website);
      }, function(err){
        console.log(err);
        res.status(400);
      });
  }

  // delete the one below

  // function createWebsite(req, res) {
  //   const userId = req.params['userId'];
  //   const website = req.body;
  //   website._userId = userId;
  //   websiteModel.createWebsiteForUser(website)
  //     .then(function(response) {
  //       console.log('created website: ' + response);
  //       websiteModel.findAllWebsitesForUser(userId)
  //         .then(function (websites){
  //           res.status(200).json(websites);
  //         })
  //     }, function(err){
  //       console.log(err);
  //       res.status(500);
  //     });
  // }

  function findAllWebsitesForUser(req, res) {
    const userId = req.params['userId'];
    websiteModel
      .findAllWebsitesForUser(userId)
      .then(function(websites){
        res.json(websites);
        console.log('websites found for given user' + websites);
      }, function(err) {
        console.log(err);
        res.status(400);
      });
  }


  function findWebsiteById(req, res) {
    const websiteId = req.params['websiteId'];
    websiteModel
      .findWebsiteById(websiteId)
      .then(function(website){
        console.log('website found by id:' + website);
        res.json(website);
      }, function(err) {
        console.log(err);
        res.status(400);
      });
  }

  function updateWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    var website = req.body;
    websiteModel.updateWebsite(websiteId, website)
      .then(function(response) {
        res.json({});
        console.log('website updated:' + websiteId);
      }, function(err) {
        console.log(err);
        res.status(400);
      });
  }


  function deleteWebsite (req, res) {
    const websiteId = req.params['websiteId'];
    websiteModel.deleteWebsite(websiteId).then(
      function (deletedWebsite) {
        res.status(200).json(deletedWebsite);
      }, function (err) {
        res.status(404).json(err);
      }
    );}


};


