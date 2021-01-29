import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CompteComptable} from '../model/compte-comptable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompteComptableService {
  Url = 'http://localhost:8090/CompteComptable';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Array<CompteComptable>>{
    return this.http.get<Array<CompteComptable>>(this.Url);
  }
}
