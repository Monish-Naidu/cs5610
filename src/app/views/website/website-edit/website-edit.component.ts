import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service';
import {ActivatedRoute, Router} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  uid: string;
  wid: string;
  name: string;
  description: string;
  website = new Website('', '', '', '');
  websites: Website[];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['userId'];
      console.log(this.uid);
      console.log(params);
      this.wid = params['wid'];
    });
    this.websiteService.findWebsitesById(this.wid)
      .subscribe((website: Website) => {
        this.website = website;
          if (this.website) {
            this.name = this.website.name;
            this.description = this.website.description;
          }
        },
        (error: any) => console.log(error)
        );

    this.websiteService.findAllWebsitesForUser(this.uid)
      .subscribe((websites: Website[]) => {
        this.websites = websites;
        console.log(websites);
      },
        (error: any) => console.log(error)
        );
  }

  update() {
    this.websiteService.updateWebsite(this.wid, new Website(this.wid, this.name, this.uid, this.description))
      .subscribe((data: any) => {
        this.router.navigateByUrl('/user/' + this.uid + '/website');
      });
  }


  delete() {
    this.websiteService.deleteWebsite(this.wid).subscribe((data: any) => {
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    });
  }

}
