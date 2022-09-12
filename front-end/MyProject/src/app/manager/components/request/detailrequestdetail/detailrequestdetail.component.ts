import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/entity/employee.entity';
import { Policy } from 'src/app/entity/policy.entity';
import { RequestDetail } from 'src/app/entity/requestdetail.entity';
import { AdminService } from 'src/app/service/admin.service';
import { ManagerService } from 'src/app/service/manager.service';

@Component({
    templateUrl: 'detailrequestdetail.component.html'
})

export class DetailRequestDetailComponent implements OnInit {
    
    detailrequestdetail : RequestDetail;
    constructor(
      private managerService : ManagerService,
        private activatedRoute : ActivatedRoute
      ){}
      ngOnInit(){
        this.activatedRoute.paramMap.subscribe(params => {
          let id = parseInt(params.get('id'));
          this.managerService.detailRequestdetail(id).then(
            res => {
              this.detailrequestdetail= res;
            },
            error => {
              console.log(error);
            }
          )
        });
       
      }


}