import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Budget} from '../model/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  Url = "http://localhost:8098/budgets";
  constructor(private http:HttpClient) { }
  getById(id: String):Observable<Budget>{
    return this.http.get<Budget>(this.Url+"/id/"+id);
  }
  getByAnnee(annee: String):Observable<Budget>{
    return this.http.get<Budget>(this.Url+"/annee/"+annee);
  }
  save(budget: Budget): Observable<number>{
    return this.http.post<number>(this.Url, budget);
  }
}
