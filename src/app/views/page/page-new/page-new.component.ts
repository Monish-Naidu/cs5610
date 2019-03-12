import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  uid: string;
  wid: string;
  name: string;
  description: string;
  pages: Page[] = [];

  createPage() {
    const newPage = new Page(undefined, this.name, undefined, this.description)
    this.pageservice.createWebsite(this.wid, newPage);
    this.route.navigateByUrl('/user' + this.uid + '/website' + this.wid + '/page');
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
