import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckSecurity } from '../entity/checkSecurity';
import { Employee } from '../entity/employee.entity';
import { ResultSecurity } from '../entity/resultSecurity.entity';
import { AdminService } from '../service/admin.service';

@Component({
    templateUrl: 'forgotpassword.component.html',
    styleUrls: ['./forgotpassword.component.css']
})

export class ForgotpasswordComponent implements OnInit {
  loginForm: FormGroup;
  msg: string;
  employee: Employee;
  resultSecurity : ResultSecurity;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      securitycode: new FormControl(null, Validators.required),
      newPass : new FormControl(null, Validators.required)
    });
    this.msg = '';
  }

 createSecurityCode() {
    let employee: Employee = this.loginForm.value;
        
        this.adminService.createSecurityCode(employee.username, employee).then(
          res => {
            this.employee = res;
            if (this.employee != null) {
              alert('send email successfully');
            }
          },
          error => {
            console.log(error);
          }
        )
  }
  changepassword(){
    let employee: Employee = this.loginForm.value;
        
    this.adminService.findEmployee(employee.username).then(
      res => {
        this.employee = res;
        console.log(employee);
        if (this.employee != null) {
        let checkSecurity: CheckSecurity = this.loginForm.value;
        this.adminService.securitycheck(checkSecurity).then(
          res =>{
            this.resultSecurity = res;
            console.log(this.resultSecurity);
            console.log(this.employee);
        if(this.resultSecurity) {
            this.employee.password = this.loginForm.value.newPass;
            console.log(this.employee);
            this.adminService.changepassword(this.employee.username, this.employee).then(res =>{
              this.employee = res;
            if(this.employee != null){
              alert("Update successfully");
              this.router.navigate(['/signin']);
            }
            }, error =>{
              console.log(error);
            });
          
        } else {
          alert("error");
        }
            
          }, 
          error => {
            console.log(error);
          }
        )
          
        }
      },
      error => {
        console.log(error);
      }
    )
    // let checkSecurity: CheckSecurity = this.loginForm.value;
    // this.adminService.securitycheck(checkSecurity).then(
    //   res => {
    //     if (res.result) {
    //      // localStorage.setItem("username", checkSecurity.username);
    //       //localStorage.setItem("employeeid",usernameAndPassword.username);
    //       this.router.navigate(['/newPassword']);
    //       alert("Welcome !!!");
    //     } else {
    //       this.msg = 'Failed';
    //     }
    //   },
    //   error => {
    //     this.msg = 'Failed';
    //   }
    // );
    }
}