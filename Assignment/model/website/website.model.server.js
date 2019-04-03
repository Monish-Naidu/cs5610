var mongoose = require('mongoose');

var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("Website",websiteSchema);

var userModel = require('../user/user.model.server');


websiteModel.createWebsite = createWebsite;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;


module.exports = websiteModel;

//
// function createWebsite(userId,website) {
//   const createdWebsite = websiteModel.create(website);
//     createdWebsite.then(
//       function (website) {
//         userModel.findUserById(website._userId)
//           .then(
//             function (user) {
//               user.websites.push(website);
//               return user.save();
//             })
//       });
//         return website;
// }

function createWebsite(req, res) {
  console.log('made it to website.model.server.js');
  var userId = req.params.userId;
  var website = req.body;
  websiteModel.createWebsite(userId,website)
    .then(
      function (website) {
        res.json(website);
      },
      function (error) {
        res.statusCode(400).send(error);
      }
    );
}

function findAllWebsitesForUser(userId) {
  return websiteModel.find({userId:userId});
}

function findWebsiteById(id) {
  return websiteModel.findById(id);
}

function updateWebsite(id,website) {
  return websiteModel.findByIdAndUpdate(id,website);
}

function deleteWebsite(id){
  return websiteModel.findByIdAndRemove(id);
}

