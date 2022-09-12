import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UsernameAndPassword } from 'src/app/entity/usernameAndPassword.entity';
import { AccountService } from 'src/app/service/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msg: string;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    this.msg = '';
  }

  login() { 
    let usernameAndPassword: UsernameAndPassword = this.loginForm.value;
    this.accountService.login(usernameAndPassword).then(
      res => {
        if (res.result) {
          localStorage.setItem("username", usernameAndPassword.username);
          this.router.navigate(['/user/welcome']);
        } else {
          this.msg = 'Failed';
        }
      },
      error => {
        this.msg = 'Failed';
      }
    );
  }

}
