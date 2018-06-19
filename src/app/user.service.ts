import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:1111/playermgmt';

  // private usersUrl = 'http://127.0.0.1:1111/playermgmt/players/allplayers';
   private nickUrl = 'http://127.0.0.1:1111/playermgmt/nickname';
   private idUrl = 'http://127.0.0.1:1111/playermgmt/players';


  constructor(
      private http: HttpClient) {}

    getUsers (): Observable<User[]> {
        const url = `${this.apiUrl}/players/allplayers`;

        return this.http.get<User[]>(url).pipe(
            catchError(this.handleError('getUsers', []))
        );
    }

    getBannedUsers (): Observable<User[]> {
        const bannedUrl = `${this.apiUrl}/players/allbannedplayers`;
        console.log('bannedUrl: ', bannedUrl);
        return this.http.get<User[]>(bannedUrl).pipe(
            catchError(this.handleError('getUsers', []))
        );
    }


    getUser(id: number): Observable<User[]> {
      const url = `${this.apiUrl}/players/${id}`;
      console.log('search url:', url);

      return this.http.get<User[]>(url).pipe(
          catchError(this.handleError('getUsers', []))
      );
    }

    //Selleks, et saaks bannimist lisada
    // updateUser (user: User): Observable<any> {
    //     return this.http.put(this.apiUrl, user, httpOptions).pipe(
    //         //tap(_ => this.log(`updated hero id=${hero.id}`)),
    //         catchError(this.handleError<any>('updateUser'))
    //     );
    // }

    searchUsers (term: any, type: string): Observable<User[]> {
      console.log('term', term);
        let urlByType = (type == 'id') ? `${this.idUrl}` : `${this.nickUrl}`;
        let url = `${urlByType}/${term}`;
        // const url = `${this.idUrl}/${term}`;
        console.log('search url:', url);

        return this.http.get<User[]>(url).pipe(
            catchError(this.handleError('getUsers', []))
        );
    }

  private handleError<T>(operation = 'operation', result?: T) {
      return (error:any): Observable<T> => {
          console.error(error);
          //this.log(`${operation} failed: ${error.message}`);
          return of (result as T);
      };
  }
}
