import { Component, OnInit } from '@angular/core';
import { Widget } from 'src/app/models/widget.model.client';
import { WidgetService } from 'src/app/services/widget.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  uid: string;
  pid: string;
  wid: string;
  widgets: Widget[] = [];

  constructor(private sanitizer: DomSanitizer, private widgetService: WidgetService, private route: Router,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
    });
    this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
  }

}
