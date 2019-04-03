import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  uid: string;
  websites: Website[];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
      this.uid = params['userId'];
    });
    this.websiteService.findAllWebsitesForUser(this.uid)
      .subscribe((websites: Website[]) => {
        this.websites = websites;
      },
        (error: any) => console.log(error)
      );
  }

}
