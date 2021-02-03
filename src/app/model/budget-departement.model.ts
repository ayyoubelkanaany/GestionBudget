import { BudgetDepartementCompteComptable } from "./budget-departement-compte-comptable";


export class BudgetDepartement {
  id: number;
  montantInvestisement: String;
  montantFonctionement: String;
  montantInvestisementRestant: String;
  montantFonctionementRestant: String;
  montantTotal:String;
	refBudget:String;
	reference:String;
	refDepartement:String;
  budgetDepartementCompteComptableVo:Array<BudgetDepartementCompteComptable> = new Array<BudgetDepartementCompteComptable>();
}
