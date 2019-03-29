import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { environment } from '../../environments/environment.prod';


@Injectable()
export class UserService {

  // users: User[] = [
  //   new User('123', 'alice', 'qq', 'alice', 'alice'),
  //   new User('234', 'bob', 'qq', 'bob', 'bob'),
  //   new User('345', 'charlie', 'qq', 'charlie', 'charlie'),
  //   new User('456', 'john', 'good4u', 'john', 'smith')
  //
  // ];

  constructor(private _http: HttpClient) { }
  baseUrl = environment.baseUrl;

  createUser(user: User) {
    const newUser = {
      _id: '',
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    };
    return this._http.post(this.baseUrl + '/api/user', newUser);
  }

  findUserById(uid: string) {
    return this._http.get(this.baseUrl + '/api/user/' + uid);
  }

  findUserByUsername(username: string) {
    return this._http.get(this.baseUrl + '/api/username?username=' + username);
  }

  findUserByCredentials(username: string, password: string) {
    return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
  }

  updateUser(userId: string, user: User) {
    return this._http.put(this.baseUrl + '/api/user/' + userId, user);
  }

  deleteUser(userId: string) {
    return this._http.delete(this.baseUrl + '/api/user' + userId);
  }


}
