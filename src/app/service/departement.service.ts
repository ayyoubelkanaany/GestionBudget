import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Budget} from '../model/budget.model';
import {HttpClient} from '@angular/common/http';
import {Departement} from '../model/departement.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  Url = 'http://localhost:8090/departement';
  constructor(private http: HttpClient) { }
  getByLibelle(libelle: String): Observable<Departement>{
    return this.http.get<Departement>(this.Url + '/libelle/' + libelle);
  }
  getAllDepartement(): Observable<Departement[]>{
    return this.http.get<Departement[]>(this.Url + '/all');
  }
}
