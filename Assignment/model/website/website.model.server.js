var mongoose = new require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("websiteModel", websiteSchema);
var userModel = require('../user/user.model.server');
mongoose.set('useFindAndModify', false);

websiteModel.createWebsite = createWebsite;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;



module.exports = websiteModel;

function findAllWebsitesForUser(userId) {
  return websiteModel.find({_user:userId});
}


// function findWebsitesForUser(userId){
//   // return WebsiteModel.find({"developerId": userId})
//   // .populate('developerId')
//   //   .populate('developerId', 'username')
//   //   .exec();
//   return websiteModel.find({_user: userId});
// }

function createWebsite(userId,website) {
  return websiteModel.create(website)
    .then(
      function (website) {
        userModel.findUserById(userId)
          .then(
            function (user) {
              user.websites.push(website);
              userModel.updateUser(userId,user);
            }
          );
        return website;
      }
    )
}

function findWebsiteById(websiteId) {
  return websiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return websiteModel.findByIdAndUpdate(websiteId, website);
}

function deleteWebsite(websiteId) {
  return websiteModel.findByIdAndRemove(websiteId);
}
