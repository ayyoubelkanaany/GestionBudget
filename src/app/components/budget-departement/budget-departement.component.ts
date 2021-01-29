import { Component, OnInit } from '@angular/core';
import {BudgetDepartement} from '../../model/budget-departement';
import {BudgeDepartementService} from '../../service/budge-departement.service';
import {Budget} from '../../model/budget';
import {BudgetDepartementCompteComptable} from '../../model/budget-departement-compte-comptable';
import {CompteComptable} from '../../model/compte-comptable';
import {DepartementService} from '../../service/departement.service';
import {Departement} from '../../model/departement';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditBudgetDepartementComponent} from '../edit-budget-departement/edit-budget-departement.component';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-budget-departement',
  templateUrl: './budget-departement.component.html',
  styleUrls: ['./budget-departement.component.css']
})


export class BudgetDepartementComponent implements OnInit {
  annee: number;
  departement: string;
  budgetdepartement: BudgetDepartement = new BudgetDepartement();
  budgetdepartementStocked: Array<BudgetDepartement>;
  budgetdepartements: Array<BudgetDepartement>;

  constructor(public dialog: MatDialog, private budgetDepartementService: BudgeDepartementService, private departementService: DepartementService) { }

  ngOnInit(): void {
    this.getAllBudgetDepartement();
  }


  // tslint:disable-next-line:typedef
  getAllBudgetDepartement(){
    this.budgetDepartementService.getAll().subscribe((data) => {
      this.budgetdepartements = data;
      this.budgetdepartementStocked = data;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditBudgetDepartementComponent, {
      width: '700px',
      data: {name: '', animal: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  save(){
    this.budgetDepartementService.save(this.budgetdepartement);
  }

  delete(budgetDepartement) {
    // @ts-
    console.log(budgetDepartement.id);
    this.budgetDepartementService.delete(budgetDepartement).subscribe((data) => {
      this.budgetdepartements = this.budgetdepartements.filter( budgetDep => budgetDep.id !== budgetDepartement.id);
      console.log(data);
    });
  }

  recherche() {
    this.budgetdepartements = this.budgetdepartementStocked;
    if(this.annee != null){
      this.budgetdepartements = this.budgetdepartements.filter(budDep => budDep.budget.annee === this.annee);
    }
    // tslint:disable-next-line:triple-equals
    if(this.departement.length != 0){
      this.budgetdepartements = this.budgetdepartements.filter(budDep => budDep.departement.libelle === this.departement);
    }
  }
}

