import { Page } from '../models/page.model.client';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
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





  // pages: Page[] = [
  //   new Page('321', 'Post 1', '678', 'Lorem'),
  //   new Page('432', 'Post 2', '678', 'Lorem'),
  //   new Page('543', 'Post 3', '678', 'Lorem'),
  //   new Page('111', 'Post 1', '123', 'Lorem'),
  //   new Page('222', 'Post 2', '123', 'Lorem'),
  //   new Page('333', 'Post 3', '123', 'Lorem'),
  //   new Page('444', 'Post 1', '234', 'Lorem'),
  //   new Page('555', 'Post 2', '234', 'Lorem'),
  //   new Page('666', 'Post 3', '234', 'Lorem'),
  // ];
  //
  // createPage(pageId: String, page: Page) {
  //
  //   const new_page = {
  //     _id: (new Date()).getTime() + '',
  //     name: page.name,
  //     websiteId: page.websiteId,
  //     description: page.description
  //   };
  //
  //   this.pages.push(new_page);
  // }
  //
  // findPageByWebsiteId(websiteId: String) {
  //   const resultSet = [];
  //   for ( const i in this.pages) {
  //     if (this.pages[i].websiteId === websiteId) {
  //       resultSet.push(this.pages[i]);
  //     }
  //   }
  //   return resultSet;
  // }
  //
  // findPageByWebsiteId2(websiteId: String) {
  //   return this.pages.filter(function (page) {
  //     return page.websiteId === websiteId;
  //   });
  // }
  //
  // findPageById(pageId: String) {
  //   return this.pages.find(function (page) {
  //     return page._id === pageId;
  //   });
  // }
  //
  // updatePage(pageId, page) {
  //   for (const i in this.pages) {
  //     if (this.pages[i]._id === pageId) {
  //       this.pages[i].name = page.name;
  //       this.pages[i].description = page.description;
  //     }
  //   }
  // }
  //
  // deletePage(pageId: String) {
  //   for (const i in this.pages) {
  //     if (this.pages[i]._id === pageId) {
  //       const j = +i;
  //       this.pages.splice(j, 1);
  //     }
  //   }
  // }
}
