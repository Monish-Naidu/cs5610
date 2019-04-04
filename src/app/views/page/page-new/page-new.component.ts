import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service';
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
    console.log('this is the name:' + this.name);
    console.log('this is the description:' + this.description);
    const page = new Page(undefined, this.name, this.wid, this.description);
    this.pageService.createPage(this.wid, page)
      .subscribe(
      (data: any) => {
      this.route.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
    },
    (error: any) => console.log(error));
  }



  constructor(private pageService: PageService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['userId'];
      this.wid = params['wid'];
      this.pageService.findAllPagesForWebsite(this.wid).subscribe((pages: Page[]) => {
        this.pages = pages;
      });
    });

  }

}
