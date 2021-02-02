import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BudgetComponent} from '../../components/budget/budget.component';
import {BudgetDepartementComponent} from '../../components/budget-departement/budget-departement.component';
import {BudgetDepartementCompteComptableComponent} from '../../components/budget-departement-compte-comptable/budget-departement-compte-comptable.component';
import {CompteComptableComponent} from '../../components/compte-comptable/compte-comptable.component';
import {AcceuilComponent} from '../../components/acceuil/acceuil.component';
import {EditBudgetDepartementComponent} from '../../components/edit-budget-departement/edit-budget-departement.component';
import {DepartementComponent} from '../../components/departement/departement.component';


export const routes: Routes = [
  {path: 'budgetdepartement', component: BudgetDepartementComponent},
  {path: 'budgetdepartementcomptecompteble', component: BudgetDepartementCompteComptableComponent},
  {path: 'comptecomptable', component: CompteComptableComponent},
  {path: 'edit', component: EditBudgetDepartementComponent},
  {path: 'accueil', component: AcceuilComponent},
  {path: 'departement', component: DepartementComponent},
  {path: 'budget', component: BudgetComponent},
  {path: '', component: AcceuilComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
