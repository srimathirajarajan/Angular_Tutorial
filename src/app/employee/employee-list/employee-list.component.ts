import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  title:string='Employee Data';
  // @Input() employeeData:any[]=[];
  searchTerm:string='';
  employeeData:any[]=[];
  ngOnInit(): void {
      //get the data from api
      this.employeeData=[
        {
          name: 'Srimathi',
          role: 'Analyst(Intern)',
          years : '0.1'
        },
        {
          name: 'jan',
          role: 'Data engineering',
          years: '2'
        },
        {
          name: 'selvi',
          role: 'Intern',
          years: '3'
        },

      ];
  }
  clearResult(){
    this.searchTerm='';
  }
  fetchbyfilter(){
    return this.employeeData.filter((emp)=>
    emp.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }
 }
