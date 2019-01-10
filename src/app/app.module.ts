import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { EmployeeService } from './component/employee.service';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutocompleteModule } from 'ng2-input-autocomplete';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    EmployeeFormComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteModule.forRoot()
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
