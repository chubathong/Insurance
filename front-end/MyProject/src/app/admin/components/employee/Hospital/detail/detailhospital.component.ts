import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/entity/employee.entity';
import { Hospital } from 'src/app/entity/hospital.entity';
import { AdminService } from 'src/app/service/admin.service';


@Component({
    templateUrl: 'detailhospital.component.html',
})

export class HospitalDetailComponent implements OnInit {
    
    hospital:Hospital;
    constructor(
        private adminService : AdminService,
        private activatedRoute : ActivatedRoute
      ){}
      ngOnInit(){
        this.activatedRoute.paramMap.subscribe(params => {
          let id =params.get('id');
          this.adminService.detailHospital(id).then(
            res => {
              this.hospital = res;
            },
            error => {
              console.log(error);
            }
          )
        });
       
      }


}