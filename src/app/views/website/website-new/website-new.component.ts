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
  uid: string;
  wid: string;
  name: string;
  description: string;
  websites: Website[] = [];


  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
    });
    this.websiteService.findAllWebsitesForUser(this.uid)
      .subscribe((websites: Website[]) => {
          this.websites = websites;
        },
        (error: any) => console.log(error)
      );
  }

  create() {
    const website = new Website(undefined, this.name, undefined, this.description)
    this.websiteService.createWebsite(this.uid, website).subscribe((data: any) => {
      this.router.navigateByUrl('/user/' + this.uid + '/website');
    });
  }


}


