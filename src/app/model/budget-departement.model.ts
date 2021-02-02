import {Budget} from "./budget.model";
import {Departement} from "./departement.model";

export class BudgetDepartement {
  id: number;
  budget: Budget;
  departement: Departement;
  montantInvestisement: number;
  montantFonctionement:number;
  montantInvestisementRestant:number;
  montantFonctionementRestant:number;
  montantTotal:number;
}
