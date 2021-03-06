import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { BudgetComponent } from './components/budget/budget.component';
import { BudgetDepartementComponent } from './components/budget-departement/budget-departement.component';
import {RoutingModule} from './routes/routing/routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BudgetDepartementCompteComptableComponent } from './components/budget-departement-compte-comptable/budget-departement-compte-comptable.component';
import { CompteComptableComponent } from './components/compte-comptable/compte-comptable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { EditBudgetDepartementComponent } from './components/edit-budget-departement/edit-budget-departement.component';
import {MatStepperModule} from '@angular/material/stepper';
import { DepartementComponent } from './components/departement/departement.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { AddComponent } from './components/add/add.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    BudgetComponent,
    BudgetDepartementComponent,
    AcceuilComponent,
    BudgetDepartementCompteComptableComponent,
    CompteComptableComponent,
    EditBudgetDepartementComponent,
    DepartementComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    MatStepperModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
