import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-departement',
  templateUrl: './budget-departement.component.html',
  styleUrls: ['./budget-departement.component.css']
})
export class BudgetDepartementComponent implements OnInit {
  toggleFlag = false;
  constructor() { }

  ngOnInit(): void {
  }
  showDropdown() {
    console.log(this.toggleFlag);
    this.toggleFlag = !this.toggleFlag; }

}
