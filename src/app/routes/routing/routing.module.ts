import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BudgetComponent} from '../../components/budget/budget.component';
import {BudgetDepartementComponent} from '../../components/budget-departement/budget-departement.component';


export const routes: Routes = [
  {path: 'budgetdepartement', component: BudgetDepartementComponent},
  {path: '', component: BudgetDepartementComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
