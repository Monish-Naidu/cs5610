import { Page } from '../models/page.model.client';
import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
// import { environment } from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class PageService {

  constructor(private _http: HttpClient) {}
  baseUrl = environment.baseUrl;

  createPage(websiteId: string, page: Page) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this._http.post(url, page);
  }

  findAllPagesForWebsite(websiteId: string) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this._http.get(url);
  }

  findPageById(pageId: string) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this._http.get(url);
  }

  updatePage(pageId: string, page: Page) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this._http.put(url, page);
  }

  deletePage(pageId: string) {
    const url = this.baseUrl + '/api/page/' + pageId;
    return this._http.delete(url);
  }
}
