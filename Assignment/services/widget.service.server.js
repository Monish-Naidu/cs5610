module.exports = function (app) {


  // var widgets = [
  //   { _id: "123", widgetType: "HEADING", name: ' ', pageId: "321", size: "2", text: "GIZMODO", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
  //   { _id: "234", widgetType: "HEADING", name: ' ', pageId: "111", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
  //   { _id: "345", widgetType: "IMAGE", pageId: "111", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
  //   { _id: "567", widgetType: "HEADING", name: ' ', pageId: "111", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
  //   { _id: "678", widgetType: "YOUTUBE", name: ' ', pageId: "111", size: "", text: "", url: 'https://www.youtube.com/embed/-C_jPcUkVrM', width: "100%", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
  // ];

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });
  const baseUrl = "";

  var widgetModel = require('../model/widget/widget.model.server');


  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
  app.get("/api/widget/:widgetId",findWidgetById);
  app.put("/api/widget/:widgetId",updateWidget);
  app.delete("/api/widget/:widgetId",deleteWidget);
  //REORDER
  app.put("/api/page/:pageId/widget",reorderWidgets);

  //UPLOAD
  app.post ("/api/upload", upload.single('myFile'), uploadImage);



  function createWidget(req, res) {
    const pageId = req.params['pageId'];
    var widget = req.body;
    widgetModel
      .createWidget(pageId, widget)
      .then(function (widget) {
          log.console('new widget created:' + widget);
          res.status(200).json(widget);
        },
        function (error) {
          res.status(404).json(error);
        });

  }

  function findAllWidgetsForPage(req, res) {
    const pageId = req.params['pageId'];
    widgetModel.findAllWidgetsForPage(pageId).then(
      function (widgets) {
        console.log("found all widgets by pageId:" + widgets);
        res.status(200).json(widgets);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }


  function findWidgetById(req, res) {
    const widgetId = req.params['widgetId'];
    widgetModel.findWidgetById(widgetId).then(
      function (widget) {
        res.status(200).json(widget);
        console.log('found widget by id:' + widget);
      }, function (err) {
        res.status(404).json(err);
      }
    );
  }

    function updateWidget(req, res) {
      const widgetId = req.params['widgetId'];
      var newWidget = req.body;
      widgetModel.updateWidget(widgetId, newWidget).then(
        function (widget) {
          res.status(200).json(widget);
          console.log('widget updated:' + widget);
        },
        function (err) {
          res.status(404).json(err);
        }
      );
    }

  function deleteWidget(req, res) {
    const widgetId = req.params['widgetId'];
    widgetModel.deleteWidget(widgetId)
      .then(function(response){
        res.json({});
        console.log('widget deleted:' + widgetId);
      }, function(err) {
        console.log(err);
        res.status(400);
      });
  }


  function array_swap(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  }

  function reorderWidgets(req, res) {
    var startIndex = parseInt(req.query["start"]);
    var endIndex = parseInt(req.query["end"]);
    array_swap(widgets, startIndex, endIndex);
    // res.sendStatus(200);
  }

  function uploadImage(req, res) {
    const userId = req.body.userId;
    const websiteId = req.body.websiteId;
    const pageId = req.body.pageId;
    const widgetId = req.body.widgetId;
    const width = req.body.width;
    const name = req.body.name;
    const text = req.body.text;
    const myFile = req.file;

    console.log(req.file);

    const callbackUrl = baseUrl + '/user/' + userId + "/website/" + websiteId
      + "/page/" + pageId + "/widget";

    if(myFile == null) {
      res.redirect(callbackUrl + '/' + widgetId);
      return;
    }

    const originalname = myFile.originalname; // file name on user's computer
    const filename = myFile.filename;     // new file name in upload folder
    const path = myFile.path;         // full path of uploaded file
    const destination = myFile.destination;  // folder where file is saved to
    const size = myFile.size;
    const mimetype = myFile.mimetype;

    if (widgetId === '') {
      let widget = {type: 'IMAGE', _pageId: pageId, url: 'uploads/' + filename};
      widgetModel.createWidget(pageId, widget).then(function(newWidget) {
        console.log('created widget image (from upload image)');
        res.redirect(callbackUrl + '/' + newWidget._id);
      });
      return;
    }

    const widget =  {url: 'uploads/' + filename};
    widgetModel.updateWidget(widgetId, widget)
      .then(function (response) {
        console.log('updated widget image (from upload image): widgetId=' + widgetId);
        res.status(200);
      }, function (err) {
        console.log(err);
        res.status(500);
      });
    res.redirect(callbackUrl + '/' + widgetId);
  }


};


