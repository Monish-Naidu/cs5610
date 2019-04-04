import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {NgForm} from '@angular/forms';

import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  username: string;
  user = new User(undefined, undefined, undefined, undefined, undefined);
  uid: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        console.log('profile component: ' + params);
        this.uid = params['userId'];
        console.log('user id:' + this.uid);
      });

    this.userService.findUserById(this.uid)
      .subscribe((user: User) => {
        this.user = user;
      });
    this.username = this.user['username'];
  }



}
