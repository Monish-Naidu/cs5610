import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

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
  widget: Widget = new Widget('', '', '', '', undefined, '', undefined, '');
  localPath: string;


  constructor(private widgetService: WidgetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
      this.widgetService.findWidgetById(this.wgid).subscribe((data: any) => {
        this.widget = data;
      });
    });
  }


  updateWidget() {
    this.widgetService.updateWidget(this.wgid, this.widget).subscribe((data: any) => {
      this.router.navigateByUrl('user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget');
    });
  }

  onDelete() {
    this.widgetService.deleteWidget(this.wgid).subscribe((data: any) => {
      this.router.navigateByUrl('user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget');
    });
  }

  handleUpload(e: any): void {
    this.localPath = e.target.value;
    console.log('local: ' + this.localPath);
  }

}
