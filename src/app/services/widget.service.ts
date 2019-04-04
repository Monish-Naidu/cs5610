import {Injectable} from '@angular/core';
import { Widget} from '../models/widget.model.client';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
//import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment.prod';

@Injectable()
export  class WidgetService {

  constructor(private _http: HttpClient) {}
  baseUrl = environment.baseUrl;

  createWidget(pageId: string, widget: any) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this._http.post(url, widget);
  }

  findAllWidgetsForPage(pageId: string) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this._http.get(url);
  }

  findWidgetById(widgetId: string) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this._http.get(url);
  }
  updateWidget(widgetId: string, widget: any) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this._http.put(url, widget);
  }
  deleteWidget(widgetId: string) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this._http.delete(url);
  }

  reorderWidgets(startIndex, endIndex, pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this._http.put(url, '');
  }


}
