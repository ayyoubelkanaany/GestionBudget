import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { Departement } from 'src/app/model/departement.model';
import { DepartementService } from 'src/app/service/departement.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  departement: Departement;
  constructor(private departementservide: DepartementService, public dialogRef: MatDialogRef<AppComponent>) {
    this.departement = new Departement();
  }
  ngOnInit(): void {
  }
  Ajouter() {
    this.departementservide.save(this.departement).subscribe(data => {
      if (data === 1){
        console.log('inséré');
        this.dialogRef.close();
      }else {
          console.log('existe deja');
      }
    });
  }
}
