import { Component, OnInit } from '@angular/core';
import {BudgetService} from '../../service/budget.service';
import {Budget} from '../../model/budget.model';
import {BudgetDepartement} from '../../model/budget-departement.model';
import {DepartementService} from '../../service/departement.service';
import {Departement} from '../../model/departement.model';
import {FormControl, Validators} from '@angular/forms';
import {BudgetDepartementCompteComptable} from '../../model/budget-departement-compte-comptable';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  constructor(private budgetservide: BudgetService, private departementservide: DepartementService,private toastr: ToastrService) {
    this.budgetDepartement = new BudgetDepartement();
    this.departement = new Departement();
    this.budgetDepartements = new Array<BudgetDepartement>();
    this.budget = new Budget();
  }

  toggleFlag = false;
  lib: string;
  budget: Budget;
  annee: String;
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

  rechrchreAnnee(annee: String){
    this.budgetservide.getByAnnee(annee).subscribe(data => {
      if (data != null){
        this.budget = data;
      }else{
        this.toastr.error('aucun budget pour cette date');
      }
    });
  }
  saisieListe(){
    this.departementservide.getByLibelle(this.selectDepControl.value).subscribe(data => {
      this.budgetDepartement.refDepartement = data.refDepartement
      this.budgetDepartement.reference = data.refDepartement + '' + this.annee ;
      this.budgetDepartement.montantFonctionementRestant = '0';
      this.budgetDepartement.montantInvestisementRestant = '0';
      this.budgetDepartement.refBudget = "BG" + this.annee;
      this.budgetDepartements.push(this.cloneBudgetDepartemenet(this.budgetDepartement));
      console.log(this.budgetDepartement);
    });
  }

  sauvgarderBudget(){
    this.budget.budgetDepartementVos = this.budgetDepartements;
    this.budget.annee = this.annee;
    this.budget.description = 'description';
    this.budget.montantFonctionementRestant = '0';
    this.budget.montantInvestisementRestant = '0';
    this.budget.refBudget = 'BG' + this.annee;
    console.log(this.budget);
    this.budgetservide.save(this.budget).subscribe(data => {
      console.log(this.budget);
      this.toastr.success('Budget sauvgardé!');
      
    });
  }

  private cloneBudgetDepartemenet(budgetDepartement: BudgetDepartement) {
    const clone = new BudgetDepartement();
    clone.refDepartement = budgetDepartement.refDepartement;
    clone.montantInvestisement = budgetDepartement.montantInvestisement;
    clone.montantFonctionement = budgetDepartement.montantFonctionement;
    clone.montantTotal = budgetDepartement.montantTotal;
    clone.refBudget = budgetDepartement.refBudget;
    clone.montantFonctionementRestant = budgetDepartement.montantFonctionementRestant;
    clone.montantInvestisementRestant = budgetDepartement.montantInvestisementRestant
    clone.reference = budgetDepartement.reference;
    clone.budgetDepartementCompteComptableVo = budgetDepartement.budgetDepartementCompteComptableVo;
    return clone;
  }
  getAllDepartements(){
    this.departementservide.getAllDepartement().subscribe(data => {
      this.departements = data;
    });
  }
}
