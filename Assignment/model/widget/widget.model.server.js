var mongoose = require('mongoose');

var widgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model("Widgets", widgetSchema);
var pageModel = require('../page/page.model.server')



module.exports = widgetModel;


widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.deleteWidget = deleteWidget;
widgetModel.updateWidget = updateWidget;
widgetModel.reorderWidget = reorderWidget;


function createWidget(pageId,widget) {
  console.log('creating widget in widget.model.server');
  return widgetModel.create(widget)
    .then(
      function (widget) {
        pageModel.findPageById(pageId)
          .then(
            function (page) {

              widget.position = page.widgets.length;
              page.widgets.push(widget);

              widget.save();
              page.save();
            }
          );
        return widget;
      }
    );
}


function findAllWidgetsForPage(pageId) {
  return widgetModel.find({pageId:pageId});
}

function findWidgetById(widgetId) {
  return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  return widgetModel.findByIdAndUpdate(widgetId,widget);
}

function deleteWidget(widgetId) {
  return widgetModel.findByIdAndDelete(widgetId);
}


function reorderWidget(pageId,start,end) {
  return pageModel.findPageById(pageId)
    .then(function (page) {
      const widgetToMove = page.widgets[start];
      page.widgets.splice(start, 1);
      page.widgets.splice(end, 0, widgetToMove);
      return page.save();
    });
}
