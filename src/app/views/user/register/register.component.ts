import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  user: User;
  v_password: String;





  errorFlag: boolean;
  errorMsg = 'Registration failed!';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }



  register() {

    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    this.v_password = this.registerForm.value.v_password;



    this.errorFlag = false;

    if (this.userService.findUserByUsername(this.user.username) || this.v_password !== this.user.password) {
      this.errorFlag = true;
    } else {
      this.userService.createUser(this.user);
      this.router.navigate(['/user', this.user._id]);
    }
  }



}
