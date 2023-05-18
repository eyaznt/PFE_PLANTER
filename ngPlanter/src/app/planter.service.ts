import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Planter } from './planter';

@Injectable({
  providedIn: 'root'
})
export class PlanterService {

  $reload = new BehaviorSubject<boolean>(false);
  constructor(private _http: HttpClient) { }

  savePlanter(planterData: FormData): Observable<Planter> { 
    return this._http.post<Planter>('http://localhost:8080/planters/add', planterData);
  }      
  // savePlanter(planter: Planter): Observable<Planter> {
  //   return this._http.post<any>("http://localhost:8080/planters/add", planter);
  // }

  getPlantersByUserId(userId: string): Observable<Planter[]> {
    const url = `http://localhost:8080/planters/${userId}`;
    return this._http.get<Planter[]>(url);
  }
      deletePlanter(planterId: string): Observable<any> {
    const url = `http://localhost:8080/planters/deletePlanter/${planterId}`;
    return this._http.delete<any>(url);

  }
  // uploadImage(fileToUpload: File): Observable<any> {
  //   const formData: FormData = new FormData();        
  //   formData.append('imageUrl', fileToUpload);
  //   return this._http.post<any>('http://localhost:8080/planters/add', formData)
  // }
  setReload(status: boolean) {
    this.$reload.next(status);
  }

  getReload() {
    return this.$reload.asObservable();
  }
}  