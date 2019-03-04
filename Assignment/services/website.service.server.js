module.exports=function (app) {


  //user api list
  app.get("/api/website", helloworld);
  //app.get("/api/:userId/website")


  function helloworld(req, res) {
    console.log("Get hello api call!");
    res.status(200).send("hello website!");
  }
}
