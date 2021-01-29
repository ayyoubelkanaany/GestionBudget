import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BudgetDepartement} from '../model/budget-departement';
import {Budget} from '../model/budget';
@Injectable({
  providedIn: 'root'
})
export class BudgeDepartementService {
  Url = 'http://localhost:8090/budgetDepartements';
  constructor(private http: HttpClient) { }
  getById(id: String): Observable<BudgetDepartement>{
    return this.http.get<BudgetDepartement>(this.Url + '/id/' + id);
  }
  getByBudgetAnnee(annee: number): Observable<Array<BudgetDepartement>>{
    return this.http.get<Array<BudgetDepartement>>(this.Url + '/budget/' + annee);
  }

  getAll(): Observable<Array<BudgetDepartement>>{
    return this.http.get<Array<BudgetDepartement>>(this.Url);
  }
  save(budgetdepartement: BudgetDepartement): Observable<BudgetDepartement>{
    return this.http.post<BudgetDepartement>(this.Url, budgetdepartement);
  }
  delete(budgetDepartement: BudgetDepartement): Observable<boolean>{
    // @ts-ignore
    return this.http.delete<boolean>(this.Url + '/id/' + budgetDepartement.id);
  }
  update(budgetdepartement: BudgetDepartement): Observable<BudgetDepartement>{
    return this.http.put<BudgetDepartement>(this.Url, budgetdepartement);
  }
}
