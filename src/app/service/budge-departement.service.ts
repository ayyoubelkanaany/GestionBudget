import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BudgeDepartement} from '../model/budge-departement';
@Injectable({
  providedIn: 'root'
})
export class BudgeDepartementService {

  Url = 'http://localhost:8090/budgetdepartement';
  constructor(private http: HttpClient) { }
  getById(id: String): Observable<BudgeDepartement>{
    return this.http.get<BudgeDepartement>(this.Url + '/id/' + id);
  }

  getAll(): Observable<Array<BudgeDepartement>>{
    return this.http.get<Array<BudgeDepartement>>(this.Url);
  }
  save(budgetdepartement: BudgeDepartement): Observable<number>{
    return this.http.post<number>(this.Url, budgetdepartement);
  }
}
