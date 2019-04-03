import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widget: Widget;
  localPath: string;
  baseUrl = environment.baseUrl;



  constructor(private widgetService: WidgetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uid = params['userId'];
          this.wgid = params['wgid'];
          this.pid = params['pid'];
          this.wid = params['wid'];
        }
      );
    console.log('header user id: ' + this.uid);
    console.log('header web id: ' + this.wid);
    console.log('header page id: ' + this.pid);
    console.log('header widget id: ' + this.wgid);
    if (this.wgid === undefined) {
      this.widget = new Widget(undefined, undefined, 'HEADER', '',
        undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    } else {
      this.widgetService.findWidgetById(this.wgid).subscribe(
        (data: Widget) => {
          this.widget = data;
          console.log('Got widget, type' + this.widget.widgetType);
        },
        (error: any) => {
          console.log('Can not find widget.');
        });
    }
  }

  updateWidget() {
    if (this.wgid === undefined) {
      this.widget.widgetType = 'IMAGE';
      this.widget.pageId = this.pid;
      this.widgetService.createWidget(this.pid, this.widget).subscribe(
        (widget: Widget) => {
          console.log('creating widget image: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', width: ' + widget.width);        },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (widget: Widget) => {
          console.log('update widget image: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', width: ' + widget.width);        },
        (error: any) => console.log(error)
      );
    }
    this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }

  deleteWidget() {
    if (this.wgid !== undefined) {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (data: Widget) => {
          console.log('delete widget image');
        },
        (error: any) => console.log(error)
      );
    }
    this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }

  handleUpload(e: any): void {
    this.localPath = e.target.value;
    console.log('local: ' + this.localPath);
  }

}
