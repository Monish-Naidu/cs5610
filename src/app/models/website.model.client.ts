export class Website {
  _id: String;
  name: String;
  developerId: String;
  description: String;


  constructor (id: String, name: String, devloperId: String, description: String) {
    this._id = id;
    this.name = name;
    this.developerId = devloperId;
    this.description = description;
  }
}
