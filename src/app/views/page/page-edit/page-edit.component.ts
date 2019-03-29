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
  description: string;

  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  updatePage() {
    const newPage = new Page(this.pid, this.name, this.wid, this.description);
    this.pageService.updatePage(this.pid, newPage)
      .subscribe((data: any) => {
      this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
    });
  }

  deletePage() {
    this.pageService.deletePage(this.pid).subscribe((date: any) => {
      this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
    });
  }

}
