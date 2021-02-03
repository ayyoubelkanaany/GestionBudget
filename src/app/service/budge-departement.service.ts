import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BudgetDepartement } from '../model/budget-departement.model';



@Injectable({
  providedIn: 'root'
})
export class BudgeDepartementService {

  getByBudgetAnnee(annee: number):Observable<Array<BudgetDepartement>> {
    return this.http.get<Array<BudgetDepartement>>(this.Url + '/annee/' + annee);
  }
  Url = 'http://localhost:8098/budgetDepartements';
  constructor(private http: HttpClient) { }
  getById(id: String): Observable<BudgetDepartement>{
    return this.http.get<BudgetDepartement>(this.Url + '/id/' + id);
  }
  getByRefBudget(refBudget: String): Observable<Array<BudgetDepartement>>{
    return this.http.get<Array<BudgetDepartement>>(this.Url + '/refBudget/' + refBudget);
  }
  getByRefDepartements(refDepartement: String):Observable<Array<BudgetDepartement>>{
    return this.http.get<Array<BudgetDepartement>>(this.Url+'/refDepartement/'+refDepartement);

  }
  getAll(): Observable<Array<BudgetDepartement>>{
    return this.http.get<Array<BudgetDepartement>>(this.Url);
  }
  
  save(budgetdepartement: BudgetDepartement): Observable<number>{
    return this.http.post<number>(this.Url, budgetdepartement);
  }
  delete(budgetDepartement: BudgetDepartement): Observable<number>{
    // @ts-ignore
    return this.http.delete<number>(this.Url + '/id/' + budgetDepartement.id);
  }
  update(budgetdepartement: BudgetDepartement): Observable<number>{
    return this.http.put<number>(this.Url, budgetdepartement);
  }
}
