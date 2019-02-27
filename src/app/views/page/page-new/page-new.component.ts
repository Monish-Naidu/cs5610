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
  uId: string;
  wId: string;
  page: Page;
  name: string;
  description: string;

  create() {
    this.pageservice.createWebsite(this.wId, this.page);
    this.route.navigateByUrl('/user' + this.uId + '/website' + this.wId + '/page');
  }

  constructor(private pageservice: PageService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uId = params['uId'];
      this.wId = params['wId'];
      this.page = new Page('', 'name', this.wId,this.description);
    });

  }

}
