import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service';
import {inject} from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetListComponent} from '../../widget-list/widget-list.component';


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
      this.widget.widgetType = 'HEADING';
      this.widget.pageId = this.pid;
      this.widgetService.createWidget(this.pid, this.widget).subscribe(
        (widget: Widget) => {
          console.log('create widget header: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', size: ' + widget.size);        },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (widget: Widget) => {
          console.log('update widget header: ' + widget._id + ', name: ' + widget.name
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
          console.log('delete widget header');
        },
        (error: any) => console.log(error)
      );
    }
    this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }



}









