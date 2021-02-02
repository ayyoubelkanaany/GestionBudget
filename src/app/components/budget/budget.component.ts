import { Component, OnInit } from '@angular/core';
import {BudgetService} from '../../service/budget.service';
import {Budget} from '../../model/budget.model';
import {BudgetDepartement} from '../../model/budget-departement.model';
import {DepartementService} from '../../service/departement.service';
import {Departement} from '../../model/departement.model';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  constructor(private budgetservide: BudgetService, private departementservide: DepartementService) {
    this.budgetDepartement = new BudgetDepartement();
    this.departement = new Departement();
    this.budgetDepartements = new Array<BudgetDepartement>();
    this.budget = new Budget();
  }

  toggleFlag = false;
  lib: string;
  budget: Budget;
  annee: number;
  budgetDepartements: Array<BudgetDepartement>;
  budgetDepartement: BudgetDepartement;
  departement: Departement;
  departements: Array<Departement>;

  selectDepControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.getAllDepartements();
  }
  showDropdown() {
    console.log(this.toggleFlag);
    this.toggleFlag = !this.toggleFlag;
  }
  rechrchreAnnee(annee: number){
    this.budgetservide.getByAnnee(annee).subscribe(data => {
      this.budget = data;
    });
  }
  saisieListe(){
    this.departementservide.getByLibelle(this.selectDepControl.value).subscribe(data => {
      this.budgetDepartement.departement = data;
      this.budgetDepartements.push(this.cloneBudgetDepartemenet(this.budgetDepartement));
      console.log(this.budgetDepartement.departement);
    });
  }

  sauvgarderBudget(){
    this.budget.budgetDepartement = this.budgetDepartements;
    this.budget.annee = this.annee;
    console.log(this.budget);
    this.budgetservide.save(this.budget).subscribe(data => {
      console.log('sauvgardé');
    });
  }

  private cloneBudgetDepartemenet(budgetDepartement: BudgetDepartement) {
    const clone = new BudgetDepartement();
    clone.departement = budgetDepartement.departement;
    clone.montantInvestisement = budgetDepartement.montantInvestisement;
    clone.montantFonctionement = budgetDepartement.montantFonctionement;
    clone.montantTotal = budgetDepartement.montantTotal;
    return clone;
  }
  getAllDepartements(){
    this.departementservide.getAllDepartement().subscribe(data => {
      this.departements = data;
    });
  }
}
