import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BudgetDepartementCompteComptable} from '../model/budget-departement-compte-comptable';

@Injectable({
  providedIn: 'root'
})
export class BudgetDepartementCompteComptableService {
  Url = 'http://localhost:8098/budgetDepartementCompteComptables';
  constructor(private http: HttpClient) { }
  save(budgetDepartementCompteComptable: BudgetDepartementCompteComptable): Observable<number>{
    return this.http.post<number>(this.Url, budgetDepartementCompteComptable);
  }
  getAll(): Observable<BudgetDepartementCompteComptable[]>{
    return this.http.get<BudgetDepartementCompteComptable[]>(this.Url);
  }
}
