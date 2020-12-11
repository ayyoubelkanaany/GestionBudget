import { Component, OnInit } from '@angular/core';
import {BudgeDepartement} from '../../model/budge-departement';
import {BudgeDepartementService} from '../../service/budge-departement.service';

@Component({
  selector: 'app-budget-departement',
  templateUrl: './budget-departement.component.html',
  styleUrls: ['./budget-departement.component.css']
})
export class BudgetDepartementComponent implements OnInit {
  toggleFlag = false;
  budgetdepartement: BudgeDepartement;
  constructor(private budgetdepartementservide: BudgeDepartementService) { }

  ngOnInit(): void {
  }
  showDropdown() {
    console.log(this.toggleFlag);
    this.toggleFlag = !this.toggleFlag; }
save(){
    this.budgetdepartementservide.save(this.budgetdepartement).subscribe((data) => {
      console.log(data);
    });
}
}
