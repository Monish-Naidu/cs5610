module.exports=function (app) {



  //user api list
  app.get("/api/page", helloworld);


  function helloworld(req, res) {
    console.log("Get hello api call!");
    res.status(200).send("hello page!");
  }
}
