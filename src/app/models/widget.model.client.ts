export class Widget {
  _id: string;
  name: string;
  widgetType: string;
  pageId: string;
  size: number;
  text: string;
  width: number;
  url: string;

  constructor(_id: string, name: string, widgetType: string, pageId: string, size: number, text: string, width: number, url: string) {
    this._id = _id;
    this.name = name;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.width = width;
    this.url = url;
  }
}


// These are the are all the values from professors list of widgets
// _id: String;
// type: String;
// pageId: String;
// size: String;
// text: String;
// url: String;
// width: String;
// name: String;
// formatted: Boolean;
// rows: number;
// placeholder: String;



// export class WidgetHeading implements Widget {
//   name: string;
//   _id: string;
//   pageId: string;
//   widgetType: string;
//   size: number;
//   text: string;
//
//   constructor(name: string, _id: string, widgetType: string, pageId: string, size: number, text: string) {
//     this._id = _id;
//     this.widgetType = widgetType;
//     this.pageId = pageId;
//     this.size = size;
//     this.text = text;
//   }
// }
//
// export class WidgetImage implements Widget {
//   name: string;
//   _id: string;
//   pageId: string;
//   widgetType: string;
//   width: string;
//   url: string;
//
//   constructor(name: string, _id: string, widgetType: string, pageId: string, width: string, url: string) {
//     this._id = _id;
//     this.widgetType = widgetType;
//     this.pageId = pageId;
//     this.width = width;
//     this.url = url;
//   }
// }
//
// export class WidgetHtml implements Widget {
//   name: string;
//   _id: string;
//   pageId: string;
//   widgetType: string;
//   text: string;
//
//   constructor(name: string, _id: string, widgetType: string, pageId: string, text: string) {
//     this._id = _id;
//     this.widgetType = widgetType;
//     this.pageId = pageId;
//     this.text = text;
//   }
// }
//
// export class WidgetYoutube implements Widget {
//   name: string;
//   _id: string;
//   pageId: string;
//   widgetType: string;
//   width: string;
//   url: string;
//
//   constructor(name: string, _id: string, widgetType: string, pageId: string, width: string, url: string) {
//     this._id = _id;
//     this.widgetType = widgetType;
//     this.pageId = pageId;
//     this.width = width;
//     this.url = url;
//   }

