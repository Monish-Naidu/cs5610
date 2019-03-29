import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  uid: string;
  wid: string;
  pages: Page[];

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
      (params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
    });
    this.pageService.findAllPagesForWebsite(this.wid)
      .subscribe(
        (data: any) => {
          this.pages = data;
    });
    console.log(this.pages);
    console.log(this.wid);
  }

}
