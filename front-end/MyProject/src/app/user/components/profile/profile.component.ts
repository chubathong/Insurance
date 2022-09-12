import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Employee } from 'src/app/entity/employee.entity';
import { AdminService } from 'src/app/service/admin.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  employee: Employee;
  updateForm: FormGroup;

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
  policystatus:string;
  role:string;
  managerid:number;
  email:string;
  displayEditDialog:boolean;
  position: string;
  constructor(
    private adminService:AdminService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private confirmationService:ConfirmationService,
    private messageService: MessageService

  ) { }

  ngOnInit() {
    this.adminService.findEmployee(localStorage.getItem('username')).then(
      res =>{
        this.employee=res;
        console.log(this.employee);
        this.activatedRoute.paramMap.subscribe((params) => {
          var id =parseInt(params.get('employee.employeeid'));  
            this.updateForm = this.formBuilder.group({
              employeeid:'',
              joindate:'',
              fullname:'',
              username:'',
              password:'',
              address:'',
              phonenumber:'',
              country:'',
              city:'',
              policyid:'',
              policystatus:'',
              role:'',
              managerid:'',
              email:'',
            })
         
        });
      },
      error =>{
        console.log(error);
      }
      
    )

  }
  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
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
confirm2() {
  this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
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


  update() {
    this.adminService.findEmployee(localStorage.getItem('username')).then(
      res =>{
        this.employee=res;
        let employee: Employee = this.updateForm.value;
    
        this.adminService.updateEmployee(employee.employeeid, employee).then(
          res => {
            this.employee = res;
            if (this.employee != null) {
              alert('update a employee successfully');
            }
          },
          error => {
            console.log(error);
          }
        )
      },
      error =>{
        console.log(error);
      }
    )

  }
  
  
}
