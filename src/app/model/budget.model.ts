import {BudgetDepartement} from './budget-departement.model';
import {BudgetCompteComptable} from './budget-compte-comptable.model';

export class Budget {
   id:number;
	refBudget:String;
	annee:String;
	description:String;
	creditOuvert:String;
	montantInvestisement:String;
	montantFonctionement:String;
	montantInvestisementRestant:String;
	montantFonctionementRestant:String;
	montantTotal:String;
   budgetDepartementVos: Array<BudgetDepartement> = new Array<BudgetDepartement>() ;
}
