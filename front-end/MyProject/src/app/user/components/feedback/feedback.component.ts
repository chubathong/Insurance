import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/entity/feedback.entity';
import { EmployeeService } from 'src/app/service/employee.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { AdminService } from 'src/app/service/admin.service';
import { Employee } from 'src/app/entity/employee.entity';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  addFormFeedback: FormGroup;
  result : Feedback;


  email :'';

  hide: boolean = false;
  position: string;
  employee:Employee;
  constructor(
    private formBuilder : FormBuilder,
    private employeeService : EmployeeService,
    private router: Router,
    private confirmationService:ConfirmationService,
    private messageService: MessageService,
    private adminService : AdminService,
  ) { }

  ngOnInit(): void {



    this.adminService.findEmployee(localStorage.getItem('username')).then(
      res =>{
        this.employee=res;
        console.log(this.employee);
        this.addFormFeedback = this.formBuilder.group({
          rate :'',
          message :'',
          dateofbirth:'',
          gender :'',
          email :this.employee.email,
          phone :this.employee.phonenumber,
          date : new Date()
        });

      

      },
      error =>{
        console.log(error);
      }
      
    )
  }
  display: boolean = false;

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to send this feedback?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {

            
            let request: Feedback= this.addFormFeedback.value;
            this.employeeService.createFeedback(request).then(        
              res=>{            
                this.result = res;
                if(this.result != null){
                  this.messageService.add({severity:'info', summary:'Confirmed', detail:'Send feedback successfully'});
                  this.addFormFeedback.reset();

                }
              },
              error=>{
                this.messageService.add({severity:'warn', summary:'Warning', detail:'Failed'});
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
