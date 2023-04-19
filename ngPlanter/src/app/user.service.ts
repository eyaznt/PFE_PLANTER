import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserKey = 'isCurrentUserLogged';

  constructor(private _http: HttpClient) { }


  isCurrentUserLogged(): Boolean {
    const userJson = sessionStorage.getItem(this.currentUserKey);
    return userJson ==='true' ? true : false ;
  }  
  loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:8080/users/login', user).pipe(
      map((response: any) => {
        if (response && response.message === 'Successfully logged in') {
          sessionStorage.setItem('currentUserEmail', user.email);
          sessionStorage.setItem('isCurrentUserLogged', 'true');
        }
      })
    );
  }

  registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/users/signup", user);
  }

  logoutUserFromRemote(email: string): Observable<any> {
    return this._http.post<any>("http://localhost:8080/users/logout", email);
  }

  updateUser(email: string, user: User): Observable<any> {
    const url = `http://localhost:8080/users/update/${email}`;
    return this._http.put<any>(url, user);
  }
  getUserByEmail(email: string): Observable<User> {
    const url = `http://localhost:8080/users/${email}`;
    return this._http.get<User>(url);
  }
  
}
