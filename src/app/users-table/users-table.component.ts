import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { UserService } from "../user.service";
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  title = 'Manage users';
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }


  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users)
  }

  getBannedUsers(): void {
    this.userService.getBannedUsers()
        .subscribe(users => this.users = users)
  }

}
