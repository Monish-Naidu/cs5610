import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/models/page.model.client';
import { PageService } from 'src/app/services/page.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Website} from '../../../models/website.model.client';

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
  errorFlag = false;
  error = 'Please enter a page name';

  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['userId'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.pageService.findPageById(this.pid).subscribe((data: any) => {
        this.page = data;
        console.log(this.page);
        if (this.page) {
          this.name = this.page.name;
          console.log('this is the name:' + this.name);
          this.description = this.page.description;
          console.log('this is the description:' + this.description);
        }
      });
    });
  }

  updatePage() {
    if (this.page.name === '') {
      this.errorFlag = true;
    } else {
      this.pageService.updatePage(this.pid, new Page(this.pid, this.name, this.wid, this.description))
        .subscribe((data: any) => {
          this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
        });
    }
  }

  deletePage() {
    this.pageService.deletePage(this.pid).subscribe((date: any) => {
      this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
    });
  }



}
