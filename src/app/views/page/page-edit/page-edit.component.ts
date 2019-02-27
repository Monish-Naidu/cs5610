import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/models/page.model.client';
import { PageService } from 'src/app/services/page.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  wId: string;
  uId: string;
  pId: string;
  currentPage: Page;

  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  update() {
    this.pageService.updatePage(this.pId, this.currentPage);
    this.router.navigateByUrl('/user/' + this.uId + '/website/' + this.wId + '/page/' + this.pId);
  }

  delete() {
    this.pageService.deletePage(this.pId);
    this.router.navigateByUrl('/user/' + this.uId + '/website/' + this.wId + '/page/');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uId = params['uid'];
      this.wId = params['wid'];
      this.pId = params['pid'];
    });
    this.currentPage = this.pageService.findPageById(this.pId);
  }

}
