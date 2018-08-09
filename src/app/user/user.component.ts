import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service'
import { User } from './user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [
    new User(1, 'Bryam', 'Giraldo', 'ngiraldo@'),
    new User(1, 'Carlos', 'Bedoya', 'bedoya@')
  ];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    // this.getUsers();
  }

  getUsers() {
    // this._userService.getUsers().then(users => this.users = users);
  }

  create(user :User) {
    this.users.push(user);      
  }

  destroy(user :User) {
    const i = this.users.indexOf(user);
    this.users.splice(i, 1);      
  }

  update(users) {
    const i = this.users.indexOf(users.original);
    this.users[i] = users.edited    
  }

}
