import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/entity/employee.entity';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { EmployeeService } from 'src/app/service/employee.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';
import { Policy } from 'src/app/entity/policy.entity';


@Component({
    templateUrl: 'list.component.html',
    styleUrls: ['./list.component.css']
})

export class EmployeeListComponent implements OnInit {
  closeResult : string;
    
  employees : Employee[];
  employee:Employee;
  fullname : any;
  p : number = 1;
  addFormEmployee : FormGroup;

  result : Employee;
  policys:Policy[];
  managers: Employee[];
  position: string;
  constructor(
      private employeeService : EmployeeService,
      private modalService : NgbModal,
      private formBuilder : FormBuilder,
      private adminService : AdminService,
      private router: Router,
      private confirmationService:ConfirmationService,
      private messageService: MessageService
     
   

  ) { }
  ngOnInit() : void {
    this.addFormEmployee = this.formBuilder.group({
      joindate: new Date,
      fullname: new FormControl(null, Validators.required),
      username:new FormControl(null, Validators.required),
      password:new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      phonenumber:new FormControl(null,
         [Validators.required,Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]),
      country:'',
      city:'',
      policyid:'',
      policystatus:'Inactivated',
      role:new FormControl(null, Validators.required),
      managerid:'',
      photo:'https://localhost:44325/uploads/noavatar.png',
      email:new FormControl(null, [Validators.required, Validators.email])
    });
      this.adminService.findAllEmployee().then(
          res => {
            this.employees = res;
          },
          error => {
            console.log(error);
          }
        )
        this.adminService.listPolicy().then(
          res=> {
              this.policys = res;
          },
          error => {
              console.log(error);
          }
          
        );
        this.adminService.listManager().then(
          res=> {
              this.managers = res;
    
          },
          error => {
    
              console.log(error);
          }
      );

  }

  add(){
    let employee: Employee = this.addFormEmployee.value;
    employee.policyid=parseInt(this.addFormEmployee.value.policyid);
    employee.managerid=parseInt(this.addFormEmployee.value.managerid);
    this.employeeService.create(employee).then(
      res=>{
        this.result = res;
        if(this.result != null){

        this.addFormEmployee.reset();
        this.employeeService.findall().then(
          res => {
            this.employees = res;
          },
          error => {
            console.log(error);
          }
        )
        this.router.navigate(['/admin/list']);

        }else{
          alert("Username or Email has been exist");
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

  open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

 
  search(){
      if(this.fullname == ""){
          this.ngOnInit();
      }else {
          this.employees= this.employees.filter(res =>{
              return res.fullname.toLocaleLowerCase().match(this.fullname.toLocaleLowerCase());
          })
      }
  }
  key : string = 'id';
  reverse : boolean = false;
  sort(key) {
      this.key = key;
      this.reverse = !this.reverse;
  }
  
confirm(employeeid:number) {
  this.confirmationService.confirm({
    
      header: 'Confirmation',
      message: 'Are you sure that you want to delete this employee?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.adminService.deleteEmployee(employeeid).then(
          res=>{
            this.result = res;
            if(this.result == null){
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'Delete employee successfully'});
            this.addFormEmployee.reset();
            this.employeeService.findall().then(
              res => {
                this.employees = res;
              },
              error => {
                console.log(error);
              }
            )
            }
          },
          error=>{
            console.log(error);
            this.messageService.add({severity:'warn', summary:'Confirmed', detail:'Failed.Because this employee has been official employee'});
          }
           );
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