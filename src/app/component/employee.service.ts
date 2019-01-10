import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employeeList = [
    {id: 1, name: 'Hardik', description: 'Developer', salary: '28000'},
    {id: 2, name: 'Akash', description: 'HR', salary: '40000'},
    {id: 3, name: 'Yogesh', description: 'CTO', salary: '50000'},
    {id: 4, name: 'Ankur', description: 'Marketing Manager', salary: '40000'}
  ];

  addEmployee = function(obj) {
    this.employeeList.push(obj);
    console.log(this.employeeList);
  }

  editEmployee = function(id) {
   return  this.employeeList.filter((item)=> {
      if(item.id == id) {
        return item;
      }
    });

  }

  updateList = function(newList) {
    this.employeeList = newList;
  }

  getEmployeeList = function() {
    return this.employeeList;
  }
}
