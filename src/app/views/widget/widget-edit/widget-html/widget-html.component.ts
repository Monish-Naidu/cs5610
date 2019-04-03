import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
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
          this.uid = params['userId'];
          this.wgid = params['wgid'];
          this.pid = params['pid'];
          this.wid = params['wid'];
        }
      );
    console.log('html id: ' + this.uid);
    console.log('html wid: ' + this.wid);
    console.log('html pid: ' + this.pid);
    console.log('html wgid: ' + this.wgid);
    if (this.wgid === undefined) {
      this.widget = new Widget(undefined, undefined, 'HTML', '',
        undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    } else {
      this.widgetService.findWidgetById(this.wgid).subscribe(
        (data: Widget) => {
          this.widget = data;
          console.log('Widget type:' + this.widget.widgetType);
        },
        (error: any) => {
          console.log('widget not found');
        });
    }
  }





  updateWidget() {
    if (this.wgid === undefined) {
      this.widget.widgetType = 'HTML';
      this.widget.pageId = this.pid;
      this.widgetService.createWidget(this.pid, this.widget).subscribe(
        (widget: Widget) => {
          console.log('creating html widget: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', size: ' + widget.size);        },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (widget: Widget) => {
          console.log('updating html widget: ' + widget._id + ', name: ' + widget.name
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
          console.log('delete widget html');
        },
        (error: any) => console.log(error)
      );
    }
    this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }



}
