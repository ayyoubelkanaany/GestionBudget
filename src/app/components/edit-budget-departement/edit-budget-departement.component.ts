import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { AppComponent } from 'src/app/app.component';
import { BudgetDepartement } from 'src/app/model/budget-departement.model';
import { BudgeDepartementService } from 'src/app/service/budge-departement.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-budget-departement',
  templateUrl: './edit-budget-departement.component.html',
  styleUrls: ['./edit-budget-departement.component.css']
})
export class EditBudgetDepartementComponent implements OnInit {
  montantFonctionnement: String;
  montantInvestisement:String;
  constructor(@Inject(MAT_DIALOG_DATA)  public data : BudgetDepartement,private toastr: ToastrService,public dialogRef: MatDialogRef<AppComponent>,private budgetDepartementService:BudgeDepartementService) {}

  ngOnInit(): void {
    console.log(this.data);
    this.montantFonctionnement = this.data.montantFonctionement;
    this.montantInvestisement = this.data.montantInvestisement;
  }
  save() {
    this.data.montantFonctionement = this.montantFonctionnement;
    this.data.montantInvestisement = this.montantInvestisement;
    this.budgetDepartementService.update(this.data).subscribe((data)=>{
      console.log(data);
      if(data === 2){
        this.toastr.success('Modification enregistrer!');

      }
      else{
        this.toastr.error('Modification non enregistrer!');
      }

      this.dialogRef.close();
        
    })
  }
}
