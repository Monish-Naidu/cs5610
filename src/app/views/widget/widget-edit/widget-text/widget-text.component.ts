import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
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
    console.log('text id: ' + this.uid);
    console.log('text wid: ' + this.wid);
    console.log('text pid: ' + this.pid);
    console.log('text wgid: ' + this.wgid);
    if (this.wgid === undefined) {
      this.widget = new Widget(undefined, undefined, 'TEXT', '',
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
      this.widget.widgetType = 'TEXT';
      this.widget.pageId = this.pid;
      this.widgetService.createWidget(this.pid, this.widget).subscribe(
        (widget: Widget) => {
          console.log('creating text widget: ' + widget._id + ', name: ' + widget.name
            + ', text: ' + widget.text + ', size: ' + widget.size);        },
        (error: any) => console.log(error)
      );
    } else {
      this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
        (widget: Widget) => {
          console.log('updating text widget: ' + widget._id + ', name: ' + widget.name
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
          console.log('deleting widget text');
        },
        (error: any) => console.log(error)
      );
    }
    this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }


}
