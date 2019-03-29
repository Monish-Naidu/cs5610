module.exports = function (app) {

  app.post("/api/user", createUser);
  //app.get("/api/user", findUserByUsername);
  app.put("/api/user/:userId", updateUserById);
  app.get('/api/user', findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.delete("/api/user/:userId", deleteUser);

  //delete me when push to heroku
 // app.get("/api/populate", populateUsers);



  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
  ];




  function findUserById(req, res) {
    var userId = req.params["userId"];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    console.log(user.username);
    res.json(user);
  }

  function findUserByCredentials(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        res.status(200).send(users[i]);
        return;
      }
    }
    res.status(404).send("Credentials does not match any registered Users");

  }


  function updateUserById(req, res){
    var userId = req.params['userId'];
    var user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;

        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("not found!");
  }


  function createUser(req, res) {
    var user = req.body;
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === user["username"]) {
        res.status(404).send("This username is already exist.");
        return;
      }
    }

    user._id = Math.floor(Math.random()*1000).toString();
    users.push(user);
    res.json(user);
  }

  function deleteUser(req, res) {
    var userId = req.params["uid"];
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users.splice(i,1);
        res.status(200).send(users);
        return;
      }
    }
    res.status(404).send("Unable to delete User, ID does not match any users");
  }

}

