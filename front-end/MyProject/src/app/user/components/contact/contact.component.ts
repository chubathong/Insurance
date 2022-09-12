import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/entity/contact.entity';
import { AdminService } from 'src/app/service/admin.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Employee } from 'src/app/entity/employee.entity';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent implements OnInit{
  addFormContact: FormGroup;
  result : Contact;
  name: '';
  email: '';
  message: '';
  date:'';
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
    this.addFormContact = this.formBuilder.group({
      name: '',
      email: '',
      message: new FormControl(null, Validators.required),
      date : new Date()
    });

    this.adminService.findEmployee(localStorage.getItem('username')).then(
      res =>{
        this.employee=res;
        console.log(this.employee);
        this.addFormContact = this.formBuilder.group({
          name: this.employee.fullname,
          email: this.employee.email,
          message: '',
          date : new Date()
        });

      

      },
      error =>{
        console.log(error);
      }
      
    )
  }


  add(){
    let request: Contact= this.addFormContact.value;
    this.employeeService.createContact(request).then(        
      res=>{            
        this.result = res;
        if(this.result != null){
          const message = `Thanks you ${this.name}!`
          alert(message);
          this.router.navigate(['/user']);
        }
      },
      error=>{

        console.log(error);
      }
      
      
    )
  }

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to send this contact?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {

            
          let request: Contact= this.addFormContact.value;
          this.employeeService.createContact(request).then(        
            res=>{            
              this.result = res;
              if(this.result != null){
                this.messageService.add({severity:'info', summary:'Confirmed', detail:'Send contact successfully'});
                this.addFormContact.reset();
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
