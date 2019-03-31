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
  widget: Widget = new Widget('', '', '', '', undefined, '', undefined, '');


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
          this.widgetService.findWidgetById(this.wgid).subscribe((data: any) => {
            this.widget = data;
            console.log(this.widget);
          });
        });
  }


  updateWidget() {
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe(
        (data: any) => {
          this.router.navigateByUrl('user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget');
        });
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe(
        (data: any) => {
          this.router.navigateByUrl('user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget');
        });
  }

}

