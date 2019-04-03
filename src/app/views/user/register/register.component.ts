import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  user: User;
  v_password: String;

  userErrorFlag: boolean;
  userErrorMsg: String;
  pwErrorFlag: boolean;
  pwErrorMsg: String;

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    this.v_password = this.registerForm.value.v_password;

    this.userErrorFlag = false;
    this.pwErrorFlag = false;

    this.userService.findUserByUsername(this.user.username).subscribe(
      (user: any) => {
        if (user != null) {
          this.userErrorFlag = true;
        } else if (this.v_password !== this.user.password) {
          this.pwErrorFlag = true;
        } else {
          return this.userService.createUser(this.user).subscribe(
            (newUser: any) => {
              this.router.navigate(['/user', newUser._id]);
            }
          );
        }
      });
  }

  cancel() {
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    this.userErrorMsg = 'username exists';
    this.pwErrorMsg = 'passwords dont match';

    this.user = new User(undefined, undefined, undefined, undefined, undefined);
  }

}
