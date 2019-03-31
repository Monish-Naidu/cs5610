export class Page {
  _id: string;
  name: string;
  websiteId: string;
  description: string; //this project uses description and title interchangeably


  constructor(id: string, name: string, websiteId: string, description: string) {
    this._id = id;
    this.name = name;
    this.websiteId = websiteId;
    this.description = description;
  }
}
