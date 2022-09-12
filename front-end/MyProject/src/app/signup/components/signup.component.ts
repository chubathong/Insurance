import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/entity/employee.entity';
import { Policy } from 'src/app/entity/policy.entity';
import { ResultCheckUsername } from 'src/app/entity/resultcheckusername.entity';
import { AccountService } from 'src/app/service/account.service';
import { AdminService } from 'src/app/service/admin.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
    templateUrl: 'signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
    result : Employee;
    addFormEmployee : FormGroup;
    hide: boolean = false;
    username:'';
    fullname: '';
    check:boolean;
    resz:true;
    policys:Policy[];
    managers: Employee[];
    employee:Employee;
    constructor(
    
      
       // private requestservice : RequestService,
       private employeeservice:EmployeeService,
        private formBuilder : FormBuilder,
        private accountService:AccountService,
        private router: Router,
        private adminService : AdminService
     
  ) { }
  
    ngOnInit()  {
      
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
        role:'employee',
        managerid:'',
        photo:'https://localhost:44325/uploads/noavatar.png',
        email:new FormControl(null, [Validators.required, Validators.email])
      });
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
      console.log(employee);
      employee.policyid=parseInt(this.addFormEmployee.value.policyid);
      employee.managerid=parseInt(this.addFormEmployee.value.managerid);
      this.employeeservice.create(employee).then(
        res=>{
          this.result = res;
          if(this.result != null){
            const message = `Welcome ${this.fullname}!`
            alert(message);
       
            this.router.navigate(['/signin']);
          }
          else{
            const message = `This username or email has been exist.Please choose another username or email!`
            alert(message);
          }
        },
        error=>{
          console.log(error);
        }
      )
    }

}