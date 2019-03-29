import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service';
import {inject} from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Widget, WidgetHeading} from '../../../../models/widget.model.client';


@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @ViewChild('f') widgetForm: NgForm;
  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widget: Widget;
  newWidget: WidgetHeading;
  widgetName: string;
  widgetSize: number;
  widgetText: string;



  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uid = params['uid'];
          this.wgid = params['wgid'];
          this.pid = params['pid'];
          this.wid = params['wid'];
        });
    this.widgetService.findWidgetById(this.wgid).subscribe((widget: any) => {
      this.widget = widget;
      console.log(widget);
    });

  }

  updateWidget() {
      this.newWidget = new WidgetHeading(this.widgetName, undefined, 'HEADING', this.pid, this.widgetSize, this.widgetText);
      this.widgetService.createWidget(this.pid, this.newWidget)
        .subscribe(
          (data: any) => {
          this.router.navigate(['../'], {relativeTo: this.route});
        });}

  delete() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe(
        (data: any) => {
      this.router.navigate(['../'], {relativeTo: this.route});
    });}

}

