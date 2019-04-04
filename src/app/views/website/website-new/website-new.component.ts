import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') webForm: NgForm;
  userId: string;
  wid: string;
  name: string;
  description: string;
  website: Website;
  websites: Website[] = [];


  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.wid = params['wid'];
    });
    this.websiteService.findAllWebsitesForUser(this.userId)
      .subscribe((websites: any) => {
          this.websites = websites;
        },
        (error: any) => console.log(error)
      );
    this.website = new Website(undefined, undefined, undefined, undefined);

  }

  create() {
    console.log('trying to create website...');
    console.log('the name given was:' + this.name);
    this.website.name = this.name;
    this.website.developerId = this.userId;
    this.website.description = this.description;
    this.websiteService.createWebsite(this.userId, this.website).subscribe(
      (data: any) => {
      this.website = data;
      console.log('created website: ' + this.website._id + ' ' + this.website.name);
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    });
  }



}


