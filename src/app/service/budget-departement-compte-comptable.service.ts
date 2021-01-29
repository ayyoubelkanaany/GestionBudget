import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetDepartementCompteComptableService {
  Url = 'http://localhost:8090/departements';
  constructor(private http: HttpClient) { }
}
