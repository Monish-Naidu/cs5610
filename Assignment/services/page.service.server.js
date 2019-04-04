module.exports = function (app) {
  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  // pages = [
  //   {_id: "321", name: "Post 1", websiteId: "456", title: "Lorem"},
  //   {_id: "432", name: "Post 2", websiteId: "456", title: "Lorem"},
  //   {_id: "543", name: "Post 3", websiteId: "456", title: "Lorem"},
  //   {_id: "111", name: "Post 1", websiteId: "890", title: "Lorem"},
  //   {_id: "222", name: "Post 2", websiteId: "890", title: "Lorem"},
  //   {_id: "333", name: "Post 3", websiteId: "890", title: "Lorem"},
  //   {_id: "444", name: "Post 1", websiteId: "567", title: "Lorem"},
  //   {_id: "555", name: "Post 2", websiteId: "567", title: "Lorem"},
  //   {_id: "666", name: "Post 3", websiteId: "567", title: "Lorem"},
  //   {_id: "777", name: "Post 1", websiteId: "678", title: "Lorem"},
  //   {_id: "888", name: "Post 2", websiteId: "678", title: "Lorem"},
  //   {_id: "999", name: "Post 3", websiteId: "678", title: "Lorem"}
  // ];

  var pageModel = require('../model/page/page.model.server');



  function createPage(req, res) {
    const websiteId = req.params["websiteId"];
    var page = req.body;
    pageModel.createPage(websiteId, page).then(
      function (page) {
        res.status(200).json(page);
        console.log('new page created:' + page);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }


  function findAllPagesForWebsite(req, res){
    var webId = req.params['websiteId'];
    pageModel.findAllPagesForWebsite(webId).then(
      function(pages){
        res.send(pages);
        console.log('found all pages for website:' + pages);
      },
      function(error){
        res.status(400).send(error);
      }
    );
  }

  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    pageModel.findPageById(pageId).then(
      function(page){
        res.send(page);
      },
      function(error){
        res.status(400).send(error);
      });
  }


  function updatePage(req, res) {
    var page = req.body;
    const pageId = req.params['pageId'];
    pageModel.updatePage(pageId,page).then(
      function(page){
        res.send(page);
        console.log('page successfully updated:' + page);
      },
      function(error){
        res.status(400).send(error);
      }
    )
  }

  function deletePage(req, res) {
    const pageId = req.params['pageId'];
    pageModel.deletePage(pageId).then(
      function(page){
        res.send(page);
        console.log('page successfully deleted:' + page);
      },
      function(error){
        res.status(400).send(error);
      }
    );
  }

};
