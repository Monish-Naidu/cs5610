export class Website {
  _id: string;
  name: string;
  developerId: string;
  description: string;


  constructor (id: string, name: string, devloperId: string, description: string) {
    this._id = id;
    this.name = name;
    this.developerId = devloperId;
    this.description = description;
  }
}
