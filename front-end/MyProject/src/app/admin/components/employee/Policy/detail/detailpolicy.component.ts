import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/entity/employee.entity';
import { Policy } from 'src/app/entity/policy.entity';
import { AdminService } from 'src/app/service/admin.service';


@Component({
    templateUrl: 'detailpolicy.component.html'
})

export class PolicyDetailComponent implements OnInit {
    
  policy : Policy;
    constructor(
        private adminService : AdminService,
        private activatedRoute : ActivatedRoute
      ){}
      ngOnInit(){
        this.activatedRoute.paramMap.subscribe(params => {
          let id = parseInt(params.get('id'));
          this.adminService.detailPolicy(id).then(
            res => {
              this.policy= res;
            },
            error => {
              console.log(error);
            }
          )
        });
       
      }


}