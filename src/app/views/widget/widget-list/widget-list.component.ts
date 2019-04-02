import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service';
import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widgets: Widget[] = [];
  uid: string;
  wid: string;
  pid: string;
  widget: Widget;




  constructor(private activateRoute: ActivatedRoute, private widgetService: WidgetService, public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    console.log('start of the function');
    this.activateRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.widgetService.findAllWidgetsForPage(this.pid).subscribe((data: any) => {
        this.widgets = data;
        console.log(this.widgets);
      });
    });

  }


  reorderWidgets(indexes) {
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid).subscribe((data: any) => {
      console.log('reorder' + data);
    });
  }

}

