import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UsersTableComponent } from "./users-table/users-table.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import {UserSearchComponent} from './user-search/user-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/manage-users', pathMatch: 'full' },
  { path: 'manage-users', component: UsersTableComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'manage-users/:term', component: UserSearchComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


