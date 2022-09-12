import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entity/employee.entity';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  employee: Employee;
  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.findEmployee(localStorage.getItem('username')).then(
      res =>{
        this.employee=res;
        console.log(this.employee);
      },
      error =>{
        console.log(error);
      }
      
    )
  }

}
