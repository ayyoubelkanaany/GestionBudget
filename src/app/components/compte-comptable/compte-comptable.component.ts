import { Component, OnInit } from '@angular/core';
import {Budget} from '../../model/budget';
import {CompteComptable} from '../../model/compte-comptable';
import {BudgetDepartementCompteComptable} from '../../model/budget-departement-compte-comptable';
import {BudgetDepartement} from '../../model/budget-departement';
import {BudgeDepartementService} from '../../service/budge-departement.service';

@Component({
  selector: 'app-compte-comptable',
  templateUrl: './compte-comptable.component.html',
  styleUrls: ['./compte-comptable.component.css']
})
export class CompteComptableComponent implements OnInit {


  budget: Budget  = new Budget();
  compteComptable: CompteComptable = new CompteComptable();
  budgetdepartementcomptecomptable: BudgetDepartementCompteComptable = new BudgetDepartementCompteComptable();
  budgetdepartementcomptecomptables: Array<BudgetDepartementCompteComptable> = new Array<BudgetDepartementCompteComptable>();
  budgetdepartement: BudgetDepartement = new BudgetDepartement();
  selectedDepartement = '';
  toggleFlag2 = false;
  toggleFlag3 = false;
  toggleFlag = false;
  constructor(private budgeDepartementService : BudgeDepartementService) { }

  ngOnInit(): void {
  }
  addToList() {
    this.budgetdepartementcomptecomptable.comptable = this.compteComptable;
    this.budgetdepartementcomptecomptables.push(this.clone(this.budgetdepartementcomptecomptable));
  }

  save() {
    this.budgetdepartement.budgetDepartementCompteComptable = this.budgetdepartementcomptecomptables;
    this.budgeDepartementService.save(this.budgetdepartement).subscribe((data) => {
      console.log(data);
    })
  }

  clone(budgetDepartementCompteComptable: BudgetDepartementCompteComptable): BudgetDepartementCompteComptable{
    const BDCC: BudgetDepartementCompteComptable = null;
    BDCC.budgetDepartement = budgetDepartementCompteComptable.budgetDepartement;
    BDCC.comptable = budgetDepartementCompteComptable.comptable;
    BDCC.montant = budgetDepartementCompteComptable.montant;
    return BDCC;
  }

  showDropdown() {
    console.log(this.toggleFlag);
    this.toggleFlag = !this.toggleFlag;
  }

  showDropdown2() {
    console.log(this.toggleFlag);
    this.toggleFlag3 = !this.toggleFlag3;
  }

}
