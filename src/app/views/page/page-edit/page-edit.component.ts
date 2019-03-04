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
  wid: string;
  uid: string;
  pid: string;
  currentPage: Page;

  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  update() {
    this.pageService.updatePage(this.pid, this.currentPage);
    this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page/' + this.pid);
  }

  delete() {
    this.pageService.deletePage(this.pid);
    this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page/');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
    });
    this.currentPage = this.pageService.findPageById(this.pid);
  }

}
