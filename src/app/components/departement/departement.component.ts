import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {Departement} from '../../model/departement.model';
import {MatDialog} from '@angular/material/dialog';
import {DepartementService} from '../../service/departement.service';
import { AddComponent } from '../add/add.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  constructor(public dialog: MatDialog, public departementService: DepartementService,private toaster:ToastrService) {}
  departements: Departement[] = new Array<Departement>();
  value = '';
  displayedColumns: string[] = ['reference', 'libelle', 'action'];
  dataSource = this.departements;
  @ViewChild(MatTable, {static: true}) table: MatTable<Departement>;

  ngOnInit(): void {
    this.getDepartements();
  }

  getDepartements(){
    this.departementService.getAllDepartement().subscribe(data => {
      this.departements = data;
      console.log(this.departements);
    });
  }

  getByLibelle(libelle: String){
    console.log(libelle);
    this.departements = this.departements.filter(departement => departement.libelle === libelle);
  }
  updateRowData(row_obj){

  }
  deleteRowData(libelle: String){
    this.departementService.getByLibelle(libelle).subscribe( val => {
      this.departementService.deleteById(val.id).subscribe(data => {
        if (data === 1){
          this.toaster.success('supprimé');
          console.log('supprimé');
          this.ngOnInit();
        }else{
          this.toaster.error('erreur de supprission');
          console.log('error');
        }
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.toaster.success('departement est ajoute');
      this.ngOnInit();
    });
  }
}
