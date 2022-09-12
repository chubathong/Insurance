import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/entity/employee.entity';
import { Policy } from 'src/app/entity/policy.entity';
import { RequestDetail } from 'src/app/entity/requestdetail.entity';
import { AdminService } from 'src/app/service/admin.service';
import { ManagerService } from 'src/app/service/manager.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
@Component({
    templateUrl: 'editrequestdetail.component.html'
})

export class EditRequestDetailComponent implements OnInit {
    
  updateForm: FormGroup;
  detailrequestdetail: RequestDetail;
  
  requestId :number;
  requestDate :Date;
  employeeId :number;
  fullname:string;
  policyid :number;
  policyDescription:string;
  amount :number;
  emi :number;
  companyId :number;
  companyName:string;
  status :string;
  managerid :number;
  reason :string;
  description :string;
  position: string;

  constructor(
    private managerService : ManagerService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private confirmationService:ConfirmationService,
    private messageService: MessageService
  ) { }
  ngOnInit() {
      this.activatedRoute.paramMap.subscribe((params) => {
          var id =parseInt(params.get('id'));
          
          this.managerService.detailRequestdetail(id).then(data => {
            const { 
              requestId,
              requestDate,
              employeeId ,
              fullname,
              policyid ,
              policyDescription,
              amount ,
              emi ,
              companyId ,
              companyName,
              status ,
              managerid ,
              reason ,
              description ,
              } = data;
    
            this.updateForm = this.formBuilder.group({
              requestId,
              requestDate,
              employeeId ,
              fullname,
              policyid ,
              policyDescription,
              amount ,
              emi ,
              companyId ,
              companyName,
              status ,
              managerid ,
              reason ,
              description ,
            })
          })
        });
    }
    confirm1() {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to approve/reject this employee?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'Check request successfully'});
              
              let detailrequestdetail: RequestDetail = this.updateForm.value;
      
              this.managerService.updatePolicyRequestDetail(detailrequestdetail.requestId, detailrequestdetail).then(
                res => {
                  this.detailrequestdetail = res;
                  if (this.detailrequestdetail != null) {
                    this.router.navigate(['/manager/request']);
                  }
                },
                error => {
                  console.log(error);
                }
              )
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