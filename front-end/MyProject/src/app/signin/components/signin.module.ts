import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CaptchaModule} from 'primeng/captcha';

import { EmployeeService } from 'src/app/service/employee.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SigninComponent } from './signin.component';
import { SigninRouting } from './signin.routing';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    SigninComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SigninRouting,
    BrowserAnimationsModule,   
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    SimpleNotificationsModule.forRoot(),
    CaptchaModule,
    ToastModule

  ],
  providers: [
    EmployeeService,

  ],
  
})


export class SigninModule {

}