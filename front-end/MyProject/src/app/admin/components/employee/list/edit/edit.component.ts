import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/entity/employee.entity';
import { AdminService } from 'src/app/service/admin.service';
import { EmployeeService } from 'src/app/service/employee.service';

import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
    templateUrl: 'edit.component.html'
})

export class EditEmployeeComponent implements OnInit {
    updateForm: FormGroup;
    employee: Employee; 
    
    employeeid:number;
    joindate:Date;
    fullname:string;
    username:string;
    password:string;
    address:string;
    phonenumber:string;
    country:string;
    city:string;
    policyid:number;
    policydescription:string;
    policystatus:string;
    role:string;
    managerid:number;
    managername:string;
    email:string;
    photo :string;
    files : any;
    res : any;
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
            
            this.adminService.detailEmployee(id).then(data => {
              const { 
                employeeid,
                joindate,
                fullname,
                username,
                password,
                address,
                phonenumber,
                country,
                city,
                policyid,
                policydescription,
                policystatus,
                role,
                managerid,
                managername,
                email,
                photo
                } = data;
      
              this.updateForm = this.formBuilder.group({
                employeeid,
                joindate,
                fullname,
                username,
                password,
                address,
                phonenumber,
                country,
                city,
                policyid,
                policydescription,
                policystatus,
                role,
                managerid,
                managername,
                email,
                photo
              })
            })
          });
      }


      confirm2() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to update policy status for this employee ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
               
                
                let employee: Employee = this.updateForm.value; 
                console.log(employee);
                this.adminService.updateEmployee(employee.employeeid, employee).then(
                  res => {
                    this.employee = res;
                    if (this.employee != null) {
                      this.messageService.add({severity:'info', summary:'Confirmed', detail:'Update policy status successfully'});
                      
                    }
                  },
                  error => {
                    console.log(error);
                  }
                )
                this.router.navigate(['/admin/employee/list']);
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