import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  wgid: string;
  widget: Widget;
  uid: string;
  wid: string;
  pid: string;

  constructor(private activateRoute: ActivatedRoute, private widgetService: WidgetService) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        console.log(params);
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params['pid'];
        this.wgid = params['wgid'];

      });
    this.widgetService.findWidgetById(this.wgid).subscribe((widget: any) => {
      this.widget = widget;
      console.log(widget);
    });
  }

}
