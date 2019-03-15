import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;
  uid: string;
  wid: string;
  name: string;
  description: string;
  pages: Page[] = [];

  createPage() {
    this.pageservice.createPage(this.uid, new Page(undefined, this.name, this.wid, this.description));
    this.route.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
  }


  constructor(private pageservice: PageService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pages = this.pageservice.findPageByWebsiteId(this.wid);
    });

  }

}
