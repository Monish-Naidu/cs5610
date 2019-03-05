import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

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
  website: Website
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
    });
    const website: Website = this.websiteService.findWebsiteById(this.wid);
    if (website) {
      this.name = website.name;
      this.description = website.description;
    }
    this.websites = this.websiteService.findWebsitesByUser(this.uid);
  }

  update() {
    this.websiteService.updateWebsite(this.wid, new Website(this.wid, this.name, this.uid, this.description));
  }


  delete() {
    this.websiteService.deleteWebsite(this.wid);
  }

}
