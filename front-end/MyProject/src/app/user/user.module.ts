import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';

import { UserRouting } from './user.routing';
import { AboutComponent } from './components/about/about.component';
import { EmployeeService } from 'src/app/service/employee.service';

import { FooterComponent } from 'src/app/user/components/footer/footer.component';

import { ContactComponent } from 'src/app/user/components/contact/contact.component';
import { ProfileComponent } from 'src/app/user/components/profile/profile.component';
import { FeedbackComponent } from 'src/app/user/components/feedback/feedback.component';

import { PolicyComponent } from 'src/app/user/components/policy/policy.component';
import { HeaderComponent } from 'src/app/user/components/header/header.component';
import {CaptchaModule} from 'primeng/captcha';

import {CascadeSelectModule} from 'primeng/cascadeselect';
import { NgxPopper } from 'angular-popper';

import {CalendarModule} from 'primeng/calendar';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import {PasswordModule} from 'primeng/password';
import {ChipsModule} from 'primeng/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestComponent } from './components/request/request.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestEmployeeComponent } from './components/requestEmployee/requestEmployee.component';
import { AccountService } from '../service/account.service';
import { DashboardService } from '../service/dashboard.service';
import { AdminService } from '../service/admin.service';

import { UpdatePhotoComponent } from './components/profile/updatephoto/updatephoto.component';
import { UpdateProfileComponent } from './components/profile/updateprofile/updateprofile.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProfileComponent,
    FeedbackComponent,
    AboutComponent,
    PolicyComponent,
    RequestComponent,
    RequestEmployeeComponent,
    UpdatePhotoComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserRouting,
    BrowserAnimationsModule,
    CaptchaModule,
    CascadeSelectModule,
    NgxPopper,   
    CalendarModule,
    PasswordModule,
    ChipsModule,
    HttpClientModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ConfirmDialogModule,
    ToastModule
   
  ],
  providers: [
    AccountService,
    DashboardService,
    EmployeeService,
    AdminService,
    ConfirmationService,
    MessageService
    
  ]
})

export class UserModule {

}