import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserKey = 'isCurrentUserLogged';
    private currentUserEmailKey = 'currentUserEmail';


  constructor(private _http: HttpClient) { }


  isCurrentUserLogged(): boolean {  
    const userJson = sessionStorage.getItem(this.currentUserKey);
    return userJson ==='true' ? true : false ;
  }  
  
  loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:8080/users/login', user).pipe(
      map((response: any) => {
        if (response && response.message === 'Successfully logged in' && response.role) {
          console.log('Response from server:', response); // add this line
  
          sessionStorage.setItem('currentUserRole', response.role); // store the role in the session storage
          sessionStorage.setItem('currentUserEmail', user.email);
          sessionStorage.setItem('isCurrentUserLogged', 'true');
        }
        return response; // add this line
      })
    );
  }
    
  registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>("http://localhost:8080/users/signup", user);
  }

  logoutUserFromRemote(email: string): Observable<any> {
    return this._http.get<any>(`http://localhost:8080/users/logout/${email}`);
  }
  

  updateUser(email: string, user: User): Observable<any> {
    const url = `http://localhost:8080/users/update/${email}`;
    return this._http.put<any>(url, user);
  }
  getUserByEmail(email: string): Observable<User> {
    const url = `http://localhost:8080/users/${email}`;
    return this._http.get<User>(url).pipe(
      map((user: User) => {
        user.userId = user.userId;
        return user;
      }),
    );
  }    
    deleteUsers(email: string): Observable<any> {
    const url = `http://localhost:8080/users/delete/${email}`;
    return this._http.delete<User>(url);
  }

  getAllUsers(): Observable<User[]> {
    const url = `http://localhost:8080/users/all`;
    return this._http.get<User[]>(url);
  }

  getUserById (userId:string): Observable<any> {
    const url = `http://localhost:8080/users/users/${userId}` ;
    return this._http.get<User>(url);
  }

}
