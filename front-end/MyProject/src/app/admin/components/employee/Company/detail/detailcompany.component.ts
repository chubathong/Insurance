import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/entity/employee.entity';
import { InsuranceCompany } from 'src/app/entity/InsuranceCompany.entity';
import { AdminService } from 'src/app/service/admin.service';


@Component({
    templateUrl: 'detailcompany.component.html'
})

export class CompanyDetailComponent implements OnInit {
    
    company : InsuranceCompany;
    constructor(
        private adminService : AdminService,
        private activatedRoute : ActivatedRoute
      ){}
      ngOnInit(){
        this.activatedRoute.paramMap.subscribe(params => {
          let id = parseInt(params.get('id'));
          this.adminService.detailCompany(id).then(
            res => {
              this.company = res;
            },
            error => {
              console.log(error);
            }
          )
        });
       
      }


}