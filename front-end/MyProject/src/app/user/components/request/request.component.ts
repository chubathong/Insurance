import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/entity/employee.entity';
import { InsuranceCompany } from 'src/app/entity/InsuranceCompany.entity';
import { Policy } from 'src/app/entity/policy.entity';
import { RequestDetail } from 'src/app/entity/requestdetail.entity';
import { Table } from 'primeng/table';
import { AdminService } from 'src/app/service/admin.service';
import { JoinRequestDetail } from 'src/app/entity/JoinRequestDetail.entity';
import { Router } from '@angular/router';

import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  addFormRequest: FormGroup;
  result : JoinRequestDetail;

  employeeid:Employee
  employee:Employee;
  managers: Employee[];
  policys:Policy[];
  companies:InsuranceCompany[];
  position: string;
  constructor(
    private formBuilder : FormBuilder,
    private adminService : AdminService,
    private router: Router,
    private confirmationService:ConfirmationService,
    private messageService: MessageService
  ) { 

  }

  ngOnInit() {
    this.adminService.findEmployee(localStorage.getItem('username')).then(
      res =>{
        this.employee=res;
        console.log(this.employee);
        this.addFormRequest = this.formBuilder.group({
          requestdate :new Date(),
          employeeid :this.employee.employeeid,
          policyid :'',
          amount :'',
          emi :'',
          companyId :'',
          status :'Not View',
          managerid :'',
          reason :'',
          description :'',
          
        });
        
      this.adminService.listManager().then(
          res=> {
              this.managers = res;
    
          },
          error => {
    
              console.log(error);
          }
      );
      this.adminService.listPolicy().then(
        res=> {
            this.policys = res;
        },
        error => {
            console.log(error);
        }
        
      );
      this.adminService.listCompany().then(
        res=> {
            this.companies = res;
        },
        error => {
            console.log(error);
        }
        
      );
      

      },
      error =>{
        console.log(error);
      }
      
    )



}


  confirm() {
    this.confirmationService.confirm({
      
        header: 'Confirmation',
        message: 'Are you sure that you want to send this request?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          
          let request: RequestDetail= this.addFormRequest.value;
          request.managerid=parseInt( this.addFormRequest.value.managerid);
          request.policyid=parseInt( this.addFormRequest.value.policyid);
          request.companyId=parseInt( this.addFormRequest.value.companyId);
          console.log(request);
  
          this.adminService.addRequest(request).then(        
            res=>{            
              this.result = res;
              if(this.result != null){
                this.messageService.add({severity:'info', summary:'Confirmed', detail:'Send request successfully'});
                this.addFormRequest.reset();
              }
            },
            error=>{
  
              console.log(error);
              this.messageService.add({severity:'warn', summary:'Warning', detail:'Failed'});
            }
            
            
          )
          this.router.navigate(['/user/request']);
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
