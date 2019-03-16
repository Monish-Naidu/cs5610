import { Component, OnInit } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { Widget, WidgetYoutube } from 'src/app/models/widget.model.client';

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
  widget: Widget;
  newWidget: WidgetYoutube;
  widgetName: string;
  widgetText: string;
  widgetUrl: string;
  widgetWidth: string;

  constructor(private widgetService: WidgetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit()  {
    this.route.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.wgid = params['wgid'];
      this.pid = params['pid'];
    });
    if (this.wgid !== 'undefined') {
      this.widget = this.widgetService.findWidgetsByID(this.wgid);
    }
  }

  updateWidget() {
    this.newWidget = new WidgetYoutube(this.widgetName, undefined, this.wgid, this.pid, this.widgetWidth, this.widgetUrl);
    this.widgetService.updateWidget(this.wgid, this.newWidget);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.widgetService.deleteWidget(this.wgid);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
