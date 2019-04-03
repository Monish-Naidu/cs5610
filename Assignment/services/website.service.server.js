module.exports = function (app) {
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);


  app.post("/api/user/:userId/website", createWebsite);



  var websiteModel = require('../model/website/website.model.server');
  var userModel = require('../model/user/user.model.server');

  function createWebsite(req, res) {
    console.log('website.service.server.js');
    // console.log('req.params._userId:' + req.params._userId);
    // console.log('req.params.uid'+ req.params.uid);
    // console.log('all the params' + req.params);
    console.log('trying to get userId ' + req.params['userId']);
    var userId = req.params['userId'];
    var website = req.body;

    console.log(website);
    websiteModel.createWebsite(userId,website).then(
      function (newWebsite) {
        console.log(newWebsite);
        res.status(200).json(newWebsite);
      }, function (err) {
        console.log(err);
        res.status(404).json(err);
      }
    );
  }


  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    websiteModel
      .findAllWebsitesForUser(userId)
      .then(function(websitesFound){
        res.status(200).json(websitesFound);
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


