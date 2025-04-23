import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeData: any[] = [];

  constructor(private empService: EmployeeService) { }
  ngOnInit(): void {
    this.fetchEmployee();
  }
  fetchEmployee() {
    this.empService.getEmployee().subscribe(
      //fetching your data asynchronously
      (data) => {
        this.employeeData = data;
      },
      //handle error
      (error) => {
        console.error('Error fetching the data' + error);
      }
    );
  }
}