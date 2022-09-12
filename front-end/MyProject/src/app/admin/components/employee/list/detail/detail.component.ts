import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/entity/employee.entity';
import { AdminService } from 'src/app/service/admin.service';


@Component({
    templateUrl: 'detail.component.html'
})

export class EmployeeDetailComponent implements OnInit {
    
    employee : Employee;
    constructor(
        private adminService : AdminService,
        private activatedRoute : ActivatedRoute
      ){}
      ngOnInit(){
        this.activatedRoute.paramMap.subscribe(params => {
          let id = parseInt(params.get('id'));
          this.adminService.detailEmployee(id).then(
            res => {
              this.employee = res;
            },
            error => {
              console.log(error);
            }
          )
        });
       
      }


}