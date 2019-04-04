import { Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment.prod';


@Injectable()
export class WebsiteService {


  constructor(private _http: HttpClient) {}
  baseUrl = environment.baseUrl;

  createWebsite(userId: string, website: Website) {
    console.log('we made it to website.service.ts');
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this._http.post(url, website);
  }


  findAllWebsitesForUser(userId: string) {
    return this._http.get(this.baseUrl + '/api/user/' + userId + '/website');
  }



  findWebsitesById(websiteId: string) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId);
  }

  updateWebsite(websiteId: string, website: Website) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    const websiteBody = website;
    return this._http.put(url, websiteBody);
  }

  deleteWebsite(websiteId: string) {
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this._http.delete(url);
  }




}
