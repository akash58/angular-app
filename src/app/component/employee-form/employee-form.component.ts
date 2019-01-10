import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from "@angular/forms";
import { FormComponentStruct } from '../../component/libraries/form-component-struct';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent extends FormComponentStruct implements OnInit {

  employeeId: any;
  employeeList: any;
  addEmployeeForm: FormGroup;
  addEmployeeFormError: string = '';
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) {
    super({
      add: 'addTag',
      edit: 'editTag'
    });
   }

  ngOnInit() {
    this.employeeList = this.employeeService.getEmployeeList();
    this.addEmployeeForm = this.fb.group({
      'name': [null,  Validators.required],
      'description': [null,  Validators.required],
      'salary': [null,  Validators.nullValidator]
      });
    console.log(this._formType);

    if (this._formType === 'edit') {
      let routeSubscription = this.activatedRoute.params.subscribe((params) => {
          this.employeeId = params.id;
      });
      var employeeData = this.employeeService.editEmployee(this.employeeId);
      console.log(employeeData);
      this.addEmployeeForm.controls.name.setValue(employeeData[0]['name']);
      this.addEmployeeForm.controls.description.setValue(employeeData[0]['description']);
      this.addEmployeeForm.controls.salary.setValue(employeeData[0]['salary']);
    }
  }

  validateForm() {
    if(this.addEmployeeForm.valid) {
      this.addEmployeeFormError = '';
    } else {
      this.addEmployeeFormError = 'Please fill complete form!'
    }
  }

  processForm(formData) {
    if(this.addEmployeeForm.valid) {
      if(this._formType == 'add') {
        this.addEmployeeFormError = '';
        this.employeeService.addEmployee({
          id: Math.floor((Math.random() * 100) + 1),
          name: formData.name,
          description: formData.description,
          salary: formData.salary
        });
      } else {
        var employeeList = this.employeeService.getEmployeeList();
        employeeList.find((item)=> {
          if(item.id == this.employeeId) {
            item.name = formData.name,
            item.description = formData.description,
            item.salary = formData.salary
          }
        });
        this.employeeService.updateList(employeeList);
      }
    } else {
      this.addEmployeeFormError = 'Please fill complete form!'
    }
  }


}
