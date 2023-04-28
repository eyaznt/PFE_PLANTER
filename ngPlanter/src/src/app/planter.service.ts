import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planter } from './planter';

@Injectable({
  providedIn: 'root'
})
export class PlanterService {


  constructor(private _http: HttpClient) { }

  savePlanter(planter: Planter): Observable<Planter> {
    return this._http.post<any>("http://localhost:8080/planters/add", planter);
  }

  getPlantersByUserId(userId: string): Observable<Planter[]> {
    const url = `http://localhost:8080/planters/${userId}`;
    return this._http.get<any>(url);

   // return this.http.get<Planter[]>(`${this.baseUrl}/${userId}`);
  }

  deletePlanter(planterId: string): Observable<any> {
    const url = `http://localhost:8080/planters/deletePlanter/${planterId}`;
    return this._http.delete<any>(url);

   // return this._http.delete(`${this.baseUrl}/deletePlanter/${planterId}`, { responseType: 'text' });
  }
}
