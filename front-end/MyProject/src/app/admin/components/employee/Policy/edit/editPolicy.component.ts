import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/entity/hospital.entity';
import { InsuranceCompany } from 'src/app/entity/InsuranceCompany.entity';
import { Policy } from 'src/app/entity/policy.entity';
import { AdminService } from 'src/app/service/admin.service';

import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
@Component({
    templateUrl: 'editPolicy.component.html'
})

export class EditPolicyComponent implements OnInit {
    updateForm: FormGroup;
    policy:Policy;
    
    policyId:number;
    policyName:string;
    policyDescription:string;
    amount:number;
    emi:number;
    duration :number;
    companyId :number;
    hospitalId :string;
    companyName:string;
    hospitalName:string;
    hospitals : Hospital[];
    companies:InsuranceCompany[];
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
            
            this.adminService.detailPolicy(id).then(data => {
              const { 
                policyId,
                policyName,
                policyDescription,
                amount,
                emi,
                duration,
                companyId,
                companyName,
                hospitalId,
                hospitalName
                } = data;
      
              this.updateForm = this.formBuilder.group({
                policyId,
                policyName,
                policyDescription,
                amount,
                emi,
                duration,
                companyId,
                companyName,
                hospitalId,
                hospitalName
              })
            })
          });
          this.adminService.listCompany().then(
            res=> {
                this.companies = res;
            },
            error => {
                console.log(error);
            }
            
            
          );
          this.adminService.listHospital().then(
            res=> {
                this.hospitals = res;
            },
            error => {
                console.log(error);
            }
            
            
          );
      }
      update() {
        let policy: Policy = this.updateForm.value;
        console.log(policy);
        policy.companyId =parseInt(this.updateForm.value.companyId);
        this.adminService.updatePolicy(policy.policyId, policy).then(
          res => {
            this.policy = res;
            if (this.policy != null) {
              alert('update a policy successfully');
              this.router.navigate(['/admin/employee/policy']);
            }
          },
          error => {
            console.log(error);
          }
        )
      }



      confirm2() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to update this policy?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
               
                
              let policy: Policy = this.updateForm.value;
              console.log(policy);
              policy.companyId =parseInt(this.updateForm.value.companyId);
              this.adminService.updatePolicy(policy.policyId, policy).then(
                res => {
                  this.policy = res;
                  if (this.policy != null) {
                    this.messageService.add({severity:'info', summary:'Confirmed', detail:'Update policy successfully'});
                    
                  }
                },
                error => {
                  console.log(error);
                }
              )
              this.router.navigate(['/admin/employee/policy']);
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
  



