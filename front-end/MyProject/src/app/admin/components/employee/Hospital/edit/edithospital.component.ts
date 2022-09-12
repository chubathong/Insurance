import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/entity/hospital.entity';
import { AdminService } from 'src/app/service/admin.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
    templateUrl: 'edithospital.component.html'
})

export class EditHospitalComponent implements OnInit {
    updateForm: FormGroup;
    hospital: Hospital;
    
    hospitalId:string;
    hospitalname:string;
    phoneNumber:string;
    location:string;
    url:string;
    position: string;
  
    constructor(
      private adminService: AdminService,
      private formBuilder: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private confirmationService:ConfirmationService,
      private messageService: MessageService
    ) { }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            var id = params.get('id');
            
            this.adminService.detailHospital(id).then(data => {
              const { 
                hospitalId,
                hospitalname,
                phoneNumber,
                location,
                url,
                } = data;
      
              this.updateForm = this.formBuilder.group({
                hospitalId,
                hospitalname,
                phoneNumber,
                location,
                url,
              })
            })
          });
      }



      confirm2() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to update this hospital?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
               
                
              let hospital: Hospital = this.updateForm.value;
        
              this.adminService.updateHospital(hospital.hospitalId, hospital).then(
                res => {
                  this.hospital = res;
                  if (this.hospital != null) {
                    this.messageService.add({severity:'info', summary:'Confirmed', detail:'Update hospital successfully'});
                  }
                },
                error => {
                  console.log(error);
                }
              )
                this.router.navigate(['/admin/employee/hospital']);
            },
            reject: (type) => {
                switch(type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                    break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                    break;
                }
            }
        });
    }
}
  



