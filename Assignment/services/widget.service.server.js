module.exports = function (app) {


  var widgets = [
    { _id: "123", widgetType: "HEADING", name: ' ', pageId: "321", size: "2", text: "GIZMODO", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    { _id: "234", widgetType: "HEADING", name: ' ', pageId: "111", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    { _id: "345", widgetType: "IMAGE", pageId: "111", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
    { _id: "567", widgetType: "HEADING", name: ' ', pageId: "111", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
    { _id: "678", widgetType: "YOUTUBE", name: ' ', pageId: "111", size: "", text: "", url: 'https://www.youtube.com/embed/-C_jPcUkVrM', width: "100%", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
  ];

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });
  const baseUrl = "";



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
    var widget = req.body;
    var pid = req.params.pageId
    var prevId = widgets[widgets.length-1]._id;
    widget._id = ((prevId)+1).toString();
    widgets.push(widget);
    res.status(201).send(widget);
    // res.json(widget);
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params.pageId;
    var allWidgets = [];
    for (var i in widgets) {
      if (widgets[i].pageId === pageId) {
        allWidgets.push(widgets[i]);
      }
    }
    res.json(allWidgets);
  }


  function findWidgetById(req, res) {
    var widgetId = req.params.widgetId;
    for (const i of widgets) {
      if (i._id === widgetId) {
        //res.json(widgets[i]);
        res.status(200).send(i);
        return;
      }
    }
    res.status(404).send("No widget matching this Id");
  }

  function updateWidget(req, res) {
    var widgetId = req.params.widgetId;
    var widget = req.body;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets[i] = widget;
        res.status(200).send(widget);
        return;
      }
    }
    res.status(404).send("Widget not updated, no wgid matching ");
  }

  function deleteWidget(req, res) {
    var widgetId = req.params.widgetId;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets.splice(i,1);
        res.status(200).send(widgets);
        return;
      }
    }
    res.status(404).send("Widget not deleted, no matching wgid");
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
      const widget =
        {_id: '', type: 'IMAGE', pageId: pageId, size: '', text: '', width: '', url: '', name: ''};
      widget._id = (new Date()).getTime().toString();
      widget.url = 'uploads/' + filename;
      /*      widget.name = name;
            widget.text = text;
            widget.width = width;*/
      console.log('create widget image: ' + widget._id);
      widgets.push(widget);
      res.redirect(callbackUrl + '/' + widget._id);
      return;
    }

    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets[i].url = 'uploads/' + filename;
        /*        widgets[i].name = name;
                widgets[i].text = text;
                widgets[i].width = width;*/
        break;
      }
    }

    res.redirect(callbackUrl + '/' + widgetId);
  }
};

