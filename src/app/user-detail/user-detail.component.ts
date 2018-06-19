import { Component, OnInit, Input } from '@angular/core';
import { User } from "../user";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { UserService } from "../user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  title = 'User detail';
    checked: boolean = true;

  // @Input() users: User[];
  user: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(
          (data: User[]) => {
              this.user = data
          });
      // .subscribe(users => this.users = users);
  }

  goBack(): void {
    this.location.back();
  }

  // save():void {
  //     this.userService.updateUser(this.user)
  //         .subscribe(() => this.goBack());
  // }

}
