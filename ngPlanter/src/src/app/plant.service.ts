import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private _http: HttpClient) { }

  getAllPlants(): Observable<Plant[]> {
    return this._http.get<Plant[]>('http://localhost:8080/api/plants');
  }
  getPlantById(plantId:string): Observable<any> {
    const url = `http://localhost:8080/api/plants/${plantId}` ;
    return this._http.get<Plant>(url);
  }
}

