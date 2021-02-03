import { Component, OnInit } from '@angular/core';
import {CompteComptable} from '../../model/compte-comptable';
import {BudgetDepartementCompteComptable} from '../../model/budget-departement-compte-comptable';
import {BudgeDepartementService} from '../../service/budge-departement.service';
import {DepartementService} from '../../service/departement.service';
import {CompteComptableService} from '../../service/compte-comptable.service';
import {Budget} from '../../model/budget.model';
import {Departement} from '../../model/departement.model';
import {BudgetDepartement} from '../../model/budget-departement.model';
import {BudgetDepartementCompteComptableService} from '../../service/budget-departement-compte-comptable.service';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private compteComptableService: CompteComptableService,private toastr: ToastrService,private budgeDepartementService : BudgeDepartementService,private departementService: DepartementService, private budgetDepartementCompteComptableService: BudgetDepartementCompteComptableService) { }

  ngOnInit(): void {
    this.getAllDepartement();
    this.getAllCompteComptable();
    this.findAll();
  }

  getByBudgetAnnee(annee: number){
    this.budgeDepartementService.getByBudgetAnnee(annee).subscribe(data=>{
      console.log(data);
      this.budgetdepartements = data;
    });
  }

  save() {
      this.compteComptableService.save(this.compteComptable).subscribe( data => {
      this.budgetdepartementcomptecomptable.montant = this.compteComptable.montant;
      this.budgetdepartementcomptecomptable.refComptable = this.compteComptable.refCompteComptable;
      this.budgetdepartementcomptecomptable.refBudgetDepartementCompteComptable = this.compteComptable.refCompteComptable + '' + this.budgetdepartement.reference;
      this.budgetDepartementCompteComptableService.save(this.budgetdepartementcomptecomptable).subscribe( next => {
        if (next === -2){
          this.toastr.error('Ce budget Departement n existe pas')
          console.log('Ce budget Departement n existe pas');
        }else if ( next === 1){
          this.toastr.success('inseré')
          console.log('inseré');
          this.ngOnInit();
        }
        }
      );
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
    BDCC.refBudgetDepartement = budgetDepartementCompteComptable.refBudgetDepartement;
    BDCC.refComptable = budgetDepartementCompteComptable.refComptable;
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

  findAll (){
    this.budgetDepartementCompteComptableService.getAll().subscribe(data => {
      this.budgetdepartementcomptecomptables = data;
    });
  }
}