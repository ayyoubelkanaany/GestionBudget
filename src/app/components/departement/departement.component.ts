import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {Departement} from '../../model/departement.model';
import {MatDialog} from '@angular/material/dialog';
import {DepartementService} from '../../service/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  constructor(public dialog: MatDialog, public departementService: DepartementService) {}
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
  addRowData(row_obj){

  }
  updateRowData(row_obj){

  }
  deleteRowData(row_obj){

  }
}
