import { Component, OnInit } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Widget } from 'src/app/models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widget: Widget = new Widget('', '', '', '', undefined, '', undefined, '');


  constructor(private widgetService: WidgetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uid = params['uid'];
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
      this.widget = new Widget(undefined, undefined, 'HEADER', '', undefined, undefined, undefined, undefined);
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
      this.widget.widgetType = 'YOUTUBE';
      this.widget.pageId = this.pid;
      this.widgetService.createWidget(this.pid, this.widget).subscribe(
        (widget: Widget) => {
          console.log('create widget youtube: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', size: ' + widget.size);        },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (widget: Widget) => {
          console.log('update widget youtube: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', size: ' + widget.size);        },
        (error: any) => console.log(error)
      );
    }
    this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }

  deleteWidget() {
    if (this.wgid !== undefined) {
      this.widgetService.deleteWidget(this.widget._id).subscribe(
        (data: Widget) => {
          console.log('delete widget youtube');
        },
        (error: any) => console.log(error)
      );
    }
    this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }


}
