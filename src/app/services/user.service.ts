import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment.prod';


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











  // createUser(user: User) {
  //   return this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName));
  // }
  //
  // findUserByCredential(username: String, password: String) {
  //   return this.users.find( function (user) {
  //     return user.username === username && user.password === password;
  //   });
  // }
  //
  // findUserById(userId: String) {
  //   return this.users.find(function(user){
  //     return user._id === userId;
  //   });
  // }
  //
  // updateUser(user: User) {
  //   for (let i = 0; i < this.users.length; i++) {
  //     if (this.users[i]._id === user._id) {
  //       this.users[i].firstName = user.firstName;
  //       this.users[i].lastName = user.lastName;
  //       return this.users[i];
  //     }
  //   }
  // }
  //
  // findUserByUsername(username: String) {
  //   return this.users.find(function(user) {
  //     return user.username === username;
  //   });
  // }
  //
  // deleteUserById(userId: String) {
  //   for (const i in this.users) {
  //     if (this.users[i]._id === userId) {
  //       const j = +i;
  //       this.users.splice(j, 1);
  //     }
  //   }
  // }
}
