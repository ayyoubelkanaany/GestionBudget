import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Departement} from '../model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  Url = 'http://localhost:8090/departements';

  constructor(private http: HttpClient) { }
  getAll(): Observable <Array<Departement>>{
    return this.http.get<Array<Departement>>(this.Url);
  }
}
