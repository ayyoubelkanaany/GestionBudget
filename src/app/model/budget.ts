import {BudgetDepartement} from './budget-departement';
import {BudgetCompteComptable} from './budget-compte-comptable';

export class Budget {
  id:number;
  annee:number;
  description:String;
  creditOuvert:number;
  montantInvestisement: number;
  montantFonctionement:number;
  montantInvestisementRestant:number;
  montantFonctionementRestant:number;
  montantTotal:number;
  budgetDepartement: Array<BudgetDepartement>;
  budgetCompteComptable: Array<BudgetCompteComptable>;
}