import { Component, OnInit } from '@angular/core';
import {Budget} from '../../model/budget';
import {CompteComptable} from '../../model/compte-comptable';
import {BudgetDepartementCompteComptable} from '../../model/budget-departement-compte-comptable';
import {BudgetDepartement} from '../../model/budget-departement';
import {BudgeDepartementService} from '../../service/budge-departement.service';
import {DepartementService} from '../../service/departement.service';
import {Departement} from '../../model/departement';
import {CompteComptableService} from '../../service/compte-comptable.service';

@Component({
  selector: 'app-budget-departement-compte-comptable',
  templateUrl: './budget-departement-compte-comptable.component.html',
  styleUrls: ['./budget-departement-compte-comptable.component.css']
})
export class BudgetDepartementCompteComptableComponent implements OnInit {
  budget: Budget  = new Budget();
  budgetdepartement: BudgetDepartement = new BudgetDepartement();
  compteComptable: CompteComptable = new CompteComptable();
  budgetdepartementcomptecomptable: BudgetDepartementCompteComptable = new BudgetDepartementCompteComptable();

  compteComptables: Array<CompteComptable> = new Array<CompteComptable>();
  budgetdepartementcomptecomptables: Array<BudgetDepartementCompteComptable> = new Array<BudgetDepartementCompteComptable>();
  budgetdepartements: Array<BudgetDepartement> = new Array<BudgetDepartement>();
  departements: Array<Departement> = new Array<Departement>();

  selectedDepartement = '';
  toggleFlag2 = false;
  toggleFlag3 = false;
  toggleFlag = false;
  annee: number;
  constructor(private compteComptableService: CompteComptableService,private budgeDepartementService : BudgeDepartementService,private departementService: DepartementService) { }

  ngOnInit(): void {
    this.getAllDepartement();
    this.getAllCompteComptable();
  }

  getByBudgetAnnee(annee: number){
    this.budgeDepartementService.getByBudgetAnnee(annee).subscribe(data=>{
      console.log(data);
      this.budgetdepartements = data;
    });
  }
  addToList() {
    this.budgetdepartementcomptecomptable.comptable = this.compteComptable;
    this.budgetdepartementcomptecomptables.push(this.clone(this.budgetdepartementcomptecomptable));
  }

  save() {
    this.budgetdepartement.budgetDepartementCompteComptable = this.budgetdepartementcomptecomptables;
     this.budgeDepartementService.save(this.budgetdepartement).subscribe((data) => {
       console.log(data);
     });
  }


   getAllDepartement(){
    this.departementService.getAllDepartement().subscribe(data => {
      console.log(data);
      this.departements = data;
    });
   }
   getAllCompteComptable(){
   this.compteComptableService.getAll().subscribe(data => {
     console.log(data);
     this.compteComptables = data;
   });
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
