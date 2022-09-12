import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entity/employee.entity';
import { AdminService } from 'src/app/service/admin.service';

@Component({
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})

export class AdminComponent implements OnInit {

    employee: Employee;
    constructor(
        private adminService:AdminService
    ) { }

    ngOnInit() {
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