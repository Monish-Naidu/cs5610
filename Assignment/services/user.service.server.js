

var users = [
  {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
  {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
  {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
  {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];


module.exports=function (app) {



  //user api list
  app.get("/api/user", helloworld);
  app.get("api/user/:uid", findUserByCred);

  function helloworld(req, res) {
    console.log("Get hello api call!");
    res.status(200).send("hello user!");
  }

  function findUserByCred(req, res){
    var username = req.query["username"];
    var password = req.query["password"];

    for (var i in users){
      if (users[i].username === username && users[i].password === password){
        res.send(users[i]);
        return;
      }
    }
    res.send({});
  }
}
