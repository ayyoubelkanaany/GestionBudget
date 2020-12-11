import {Budget} from './budget';
import {Departement} from './departement';
import {BudgetDepartementCompteComptable} from './budget-departement-compte-comptable';

export class BudgeDepartement {
  id: number;
  budget: Budget;
  departement: Departement;
  budgetDepartementCompteComptable: Array<BudgetDepartementCompteComptable>;
  montantInvestisement: number;
   montantFonctionement:number;
   montantInvestisementRestant:number;
  montantFonctionementRestant:number;
  montantTotal:number;
}
