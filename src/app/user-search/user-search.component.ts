import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { User } from '../user';
import { UserService } from '../user.service';

import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: [ './user-search.component.scss' ]
})

export class UserSearchComponent implements OnInit {
    // users: User[];
    @Input() users: User[];
    @Output() usersChange = new EventEmitter<User[]>();

    private termId: string = "";
    private termNickname: string = "";

    constructor(private router: Router, //change URL
                private route: ActivatedRoute, // knows that URL is changed and returns that value for search
                private userService: UserService) {
        this.route.params.subscribe(params => {
            console.log(params);
            if (params['id']){
                this.onSearch(params['id'], 'id')
            } else {
                this.onSearch(params['nickname'], 'nickname')
            }
        })
    }


    doSearch() {
        if (this.termId != "") {
            this.router.navigate(['manage-users', {id: this.termId}])
        } else {
            this.router.navigate(['manage-users', {nickname: this.termNickname}])
        }

    }

    onSearch(term: any, type: string){
        this.userService.searchUsers(term, type)
            .subscribe(
                (data: any) => {
                this.users = data
                this.usersChange.emit(this.users)
            });
            // users => this.users = users,
            //     this.usersChange.emit(this.users)
            // )

        // console.log(this.users)
        // this.usersChange.emit(this.users);
    }

    ngOnInit(): void {

    }
}


