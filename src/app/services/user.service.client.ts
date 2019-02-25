import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';



@Injectable()
export class UserService {

  users: User[] = [
    new User('123', 'alice', 'qq', 'alice', 'alice'),
    new User('234', 'bob', 'qq', 'bob', 'bob'),
    new User('345', 'charlie', 'qq', 'charlie', 'charlie'),
    new User('456', 'john', 'good4u', 'john', 'smith')

  ];

  createUser(user: User) {
    this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName));
  }

  findUserByCredential(username: String, password: String) {
    return this.users.find( function (user) {
      return user.username === username && user.password === password;
    });
  }

  findUserById(userId: String) {
    return this.users.find(function(user){
      return user._id === userId;
    });
  }

  updateUser(user: User) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === user._id) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
        return this.users[i];
      }
    }
  }

  deleteUserById(userId: String) {
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }
}
