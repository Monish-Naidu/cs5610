module.exports = function(app) {
  app.post("/api/user", createUser);
  app.get("/api/username", findByUsername);
  app.get("/api/user", findByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  var userModel = require('../model/user/user.model.server');



  function createUser(req, res) {
    var user = req.body;
    userModel
      .createUser(user)
      .then(
        function (user) {
          console.log("user successfully created!");
          res.json(user);
        },
        function (error) {
          if (error) {console.log(error);
            res.status(400).send(error);
          }
        }
      )
  }

  function findByUsername(req, res) {
    const username = req.query["username"];
    userModel.findUserByUserName(username).then(function(user){
      res.send(user);
    }, function(error){
      res.status(400).send(error);
    });
  }

  function findByCredentials(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    userModel.findByCredential(username, password).then(function(user){
      res.send(user);
    }, function(error){
      res.status(400);
    });
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId).exec(
      function (err,user) {
        if(err){
          return res.sendStatus(400).send(err);
        }
        return  res.json(user);
      });
  }

  function updateUser(req, res) {
    const userId = req.params["userId"];
    var user = req.body;
    userModel.updateUser(userId,user).then(
      function(user) {
        res.send(user);
      }, function (error) {
        res.status(400).send("update failed");
      });
  }

  function deleteUser(req, res) {
    const userId = req.params['userId'];
    userModel.deleteUser(userId).then(
      function(user) {
        res.send(user);
      }, function (error) {
        res.status(400).send("use not found");
      }
    );
  }
};
