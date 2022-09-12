import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { MessageService } from 'primeng/api';

import { Employee } from 'src/app/entity/employee.entity';
import { UsernameAndPassword } from 'src/app/entity/usernameAndPassword.entity';
import { AccountService } from 'src/app/service/account.service';
import { AdminService } from 'src/app/service/admin.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
    templateUrl: 'signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  msg: string;
  username:string;
  password:string;
  adminService:AdminService;
  isBool:boolean;
  employee:Employee;


  constructor(
    private formBuilder: FormBuilder,
    private employeeService:EmployeeService,
    private router: Router,
    private service:NotificationsService,
    private messageService:MessageService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    this.msg = '';
    sessionStorage.removeItem('username');    
    sessionStorage.clear();
  }


  onSuccess(message){
      this.service.success('Success',message,{
        timeOut:2000,
        animate:'fade',

      })
      
  }
  onError(message){
    this.service.error('Error',message,{

      timeOut:2000,
      animate:'fade',

    })
}

  login() {
    let usernameAndPassword: UsernameAndPassword = this.loginForm.value;
    this.employeeService.login(usernameAndPassword).then(
      res => {
        if (res.result) {
          
          localStorage.setItem("username", usernameAndPassword.username);
          this.employeeService.findaccountbyusername(usernameAndPassword.username).then(
             res =>{
               this.employee=res;
               console.log(this.employee);
               if(this.employee.role=="employee"){
                this.router.navigate(['/user']);
              }
              else if(this.employee.role=="manager"){
                this.router.navigate(['/manager']);
              }else{
                this.router.navigate(['/admin']);
              }
             },
             error =>{
                console.log(error);
             },
          )


        

        } else {
          this.onError('Failed');
        }
       
      },
      error => {
        console.log(error);
        this.onError('Failed');
      }
    );
  }

}