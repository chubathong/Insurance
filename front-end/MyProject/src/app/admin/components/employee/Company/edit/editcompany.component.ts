import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/entity/hospital.entity';
import { InsuranceCompany } from 'src/app/entity/InsuranceCompany.entity';
import { AdminService } from 'src/app/service/admin.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
    templateUrl: 'editcompany.component.html'
})

export class EditCompanyComponent implements OnInit {
    updateForm: FormGroup;
    company:InsuranceCompany;
    
    companyId:number;
    companyName:string;
    address:string;
    phone:string;
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
            var id =parseInt(params.get('id'));
            
            this.adminService.detailCompany(id).then(data => {
              const { 
                companyId,
                companyName,
                address,
                phone,
                url,
                } = data;
      
              this.updateForm = this.formBuilder.group({
                companyId,
                companyName,
                address,
                phone,
                url,
              })
            })
          });
      }


      confirm2() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to update this company?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
               
                
              let company: InsuranceCompany = this.updateForm.value;
        
              this.adminService.updateCompany(company.companyId, company).then(
                res => {
                  this.company = res;
                  if (this.company != null) {

                    this.messageService.add({severity:'info', summary:'Confirmed', detail:'Update company successfully'});
                  }
                },
                error => {
                  console.log(error);
                }
              )
                this.router.navigate(['/admin/employee/company']);
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
  



