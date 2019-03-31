import { Component, OnInit } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Widget } from 'src/app/models/widget.model.client';

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
  widget: Widget = new Widget('', '', '', '', undefined, '', undefined, '');


  constructor(private widgetService: WidgetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit()  {
    this.route.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.wgid = params['wgid'];
      this.pid = params['pid'];
      this.widgetService.findWidgetById(this.wgid).subscribe((widget: any) => {
        this.widget = widget;
        console.log(widget);
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

  onDelete() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe(
        (data: any) => {
      this.router.navigateByUrl('user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid + '/widget');
    });
  }


}
