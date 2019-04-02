export class Widget {
  _id: string;
  name: string;
  widgetType: string;
  pageId: string;
  size: number;
  text: string;
  width: number;
  url: string;
  formatted: Boolean;
  rows: number;
  placeholder: string;

  constructor(_id: string, name: string, widgetType: string, pageId: string, size: number,
              text: string, width: number, url: string, formatted: Boolean, rows: number, placeholder: string) {
    this._id = _id;
    this.name = name;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.width = width;
    this.url = url;
    this.formatted = formatted;
    this.rows = rows;
    this.placeholder = placeholder;
  }
}

