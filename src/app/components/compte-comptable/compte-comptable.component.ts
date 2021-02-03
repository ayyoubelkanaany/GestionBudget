import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/model/budget.model';
import { BudgetDepartement } from 'src/app/model/budget-departement.model';
import { BudgetDepartementCompteComptable } from 'src/app/model/budget-departement-compte-comptable';
import { CompteComptable } from 'src/app/model/compte-comptable';
import { BudgeDepartementService } from 'src/app/service/budge-departement.service';

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
  
}
