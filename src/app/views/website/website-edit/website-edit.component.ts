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
  uId: string;
  wId: string;
  website: Website;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }


  update() {
    console.log(this.website);
    this.websiteService.updateWebsite(this.wId, this.website);
  }


  delete() {
    this.websiteService.deleteWebsite(this.wId);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uId = params['uId'];
      this.wId = params['wId'];
    });
    this.website = this.websiteService.findWebsiteById(this.wId);
    this.websites = this.websiteService.findWebsitesByUser(this.uId);
  }

}
