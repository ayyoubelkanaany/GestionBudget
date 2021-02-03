import { Component, OnInit } from '@angular/core';
import {BudgeDepartementService} from '../../service/budge-departement.service';
import {DepartementService} from '../../service/departement.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditBudgetDepartementComponent} from '../edit-budget-departement/edit-budget-departement.component';
import { BudgetDepartement } from 'src/app/model/budget-departement.model';
import { BudgetDepartementCompteComptable } from 'src/app/model/budget-departement-compte-comptable';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-budget-departement',
  templateUrl: './budget-departement.component.html',
  styleUrls: ['./budget-departement.component.css']
})


export class BudgetDepartementComponent implements OnInit {
  annee: number;
  refBudget:string = '';
  refDepartement:string='';
  departement: string;
  budgetdepartement: BudgetDepartement = new BudgetDepartement();
  budgetdepartementStocked: Array<BudgetDepartement>;
  budgetdepartements: Array<BudgetDepartement>;

  constructor(public dialog: MatDialog,private toastr: ToastrService, private budgetDepartementService: BudgeDepartementService, private departementService: DepartementService) { }

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
  
  openDialog(budgDep: BudgetDepartement): void {
    budgDep.budgetDepartementCompteComptableVo = new Array<BudgetDepartementCompteComptable>();
    const dialogRef = this.dialog.open(EditBudgetDepartementComponent, {
      width: '700px',
      data: budgDep
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
      this.toastr.success('BudgetDepartement supprimmer')
    });
  }

  recherche() {
    this.budgetdepartements = this.budgetdepartementStocked;
    if(this.refBudget.length  != 0){
      this.budgetdepartements = this.budgetdepartements.filter(budDep => budDep.refBudget === this.refBudget);
    }
    // tslint:disable-next-line:triple-equals
    if(this.refDepartement.length != 0){
      this.budgetdepartements = this.budgetdepartements.filter(budDep => budDep.refDepartement === this.refDepartement);
    }
  }
}

