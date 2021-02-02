import {BudgetDepartement} from './budget-departement.model';
import {BudgetCompteComptable} from './budget-compte-comptable.model';

export class Budget {
   id: number;
   annee: number;
   description: String ;
   creditOuvert: number;
   montantInvestisement: number;
   montantFonctionement: number;
   montantInvestisementRestant: number;
   montantFonctionementRestant: number;
   montantTotal: number;
   budgetDepartement: Array<BudgetDepartement>;
   budgetCompteComptable: Array<BudgetCompteComptable>;
}
