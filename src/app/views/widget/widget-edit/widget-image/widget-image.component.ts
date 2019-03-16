import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget, WidgetImage} from '../../../../models/widget.model.client';

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
  widgetName: string;
  widgetText: string;
  widgetUrl: string;
  widgetWidth: string;
  widget: Widget;
  newWidget: WidgetImage;
  localPath: string;


  constructor(private widgetService: WidgetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
    });
    if (this.wgid !== 'undefined') {
      this.widget = this.widgetService.findWidgetsByID(this.wgid);
    }
  }

  updateWidget() {
    this.newWidget = new WidgetImage(this.widgetName, undefined, 'IMAGE', this.pid, this.widgetWidth, this.widgetUrl)
    this.widgetService.updateWidget(this.wgid, this.newWidget);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.widgetService.deleteWidget(this.wgid);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  handleUpload(e: any): void {
    this.localPath = e.target.value;
    console.log('local: ' + this.localPath);
  }

}
