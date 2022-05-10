import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(public userSvc: UserService) {}

  users: User[] = [];
  ngOnInit() {
    this.userSvc.getUsers().subscribe((response) => {
      this.users = response;
      // console.log('users:', JSON.stringify(this.users[0]));
    });
  }
}
