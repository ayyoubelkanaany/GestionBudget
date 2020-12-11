import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BudgetDepartement} from '../model/budget-departement';
@Injectable({
  providedIn: 'root'
})
export class BudgeDepartementService {

  Url = 'http://localhost:8090/budgetdepartement';
  constructor(private http: HttpClient) { }
  getById(id: String): Observable<BudgetDepartement>{
    return this.http.get<BudgetDepartement>(this.Url + '/id/' + id);
  }

  getAll(): Observable<Array<BudgetDepartement>>{
    return this.http.get<Array<BudgetDepartement>>(this.Url);
  }
  save(budgetdepartement: BudgetDepartement): Observable<number>{
    return this.http.post<number>(this.Url, budgetdepartement);
  }
}
