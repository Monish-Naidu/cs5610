import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/models/page.model.client';
import { PageService } from 'src/app/services/page.service';
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
  name: string;
  description: string; //title
  page: Page;

  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.pageService.findPageById(this.pid).subscribe((data: any) => {
        this.page = data;
        console.log(this.page);
      });
    });
  }

  updatePage() {
    this.pageService.updatePage(this.pid, this.page)
      .subscribe((data: any) => {
      this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
    });
  }

  deletePage() {
    this.pageService.deletePage(this.pid).subscribe((date: any) => {
      this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
    });
  }



}
