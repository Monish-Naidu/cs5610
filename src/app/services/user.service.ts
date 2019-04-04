import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {environment} from '../../environments/environment';
import { environment } from '../../environments/environment.prod';




@Injectable()

export class UserService {
  constructor(private http: HttpClient) {
  }

  base_url = environment.baseUrl;

  createUser(user: User) {
    const url = this.base_url + '/api/user/';
    return this.http.post(url, user);
  }




  findUserByUsername(username: String) {
    return this.http.get(this.base_url + '/api/user?username=' + username);
  }



  findUserByCredentials(username, password) {
    const url = this.base_url + '/api/user?username=' + username + '&password=' + password;
    console.log(url);
    return this.http.get(url);
  }



  findUserById(userId) {
    const url = this.base_url + '/api/user/' + userId;
    return this.http.get(url);
  }

  updateUser(userId: String, user) {
    const url = this.base_url + '/api/user/' + userId;
    return this.http.put(url, user);
  }

  deleteUserById(userId: String) {
    const url = this.base_url + '/api/user/' + userId;
    return this.http.delete(url);
  }
}

