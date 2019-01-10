import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { SearchPipe } from '../../search.pipe';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  searchParam: any;
  employeeList: any = [];

  selectedItem: any = '';
  inputChanged: any = '';
  items2: any[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeList = this.employeeService.getEmployeeList();
    console.log("this.employeeList",this.employeeList);
    this.items2= this.employeeList;
  }

  deleteEmployee(item) {
    if(confirm("Are you sure you want to delete Employee by name" + item.name + " ?")) {
      this.employeeList.splice(this.employeeList.indexOf(item), 1);
      this.employeeService.updateList(this.employeeList);
    }
  }
}
