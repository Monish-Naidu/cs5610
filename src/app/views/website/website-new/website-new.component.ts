import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') webForm: NgForm;
  uId: string;
  websites: Website[] = [];
  website: Website;

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params['uid']);
      this.uId = params['uid'];
    });
    this.websites = this.websiteService.findWebsitesByUser(this.uId);
  }

  create() {
    this.website.name = this.webForm.value.name;
    this.websiteService.createWebsite(this.uId, this.website);
  }

}


