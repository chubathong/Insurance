import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HomeComponent } from './components/home/home.component';

import { ManagerRouting } from './manager.routing';
import { AboutComponent } from './components/about/about.component';
import { EmployeeService } from 'src/app/service/employee.service';

import { FooterComponent } from 'src/app/manager/components/footer/footer.component';

import { ContactComponent } from 'src/app/manager/components/contact/contact.component';
import { ProfileComponent } from 'src/app/manager/components/profile/profile.component';


import { PolicyComponent } from 'src/app/manager/components/policy/policy.component';
import { HeaderComponent } from 'src/app/manager/components/header/header.component';
import {CaptchaModule} from 'primeng/captcha';

import {CascadeSelectModule} from 'primeng/cascadeselect';
import { NgxPopper } from 'angular-popper';

import {CalendarModule} from 'primeng/calendar';

import {PasswordModule} from 'primeng/password';
import {ChipsModule} from 'primeng/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestComponent } from './components/request/request.component';
import { HttpClientModule } from '@angular/common/http';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AccountService } from '../service/account.service';
import { DashboardService } from '../service/dashboard.service';

import { AdminService } from '../service/admin.service';

import { ManagerComponent } from './manager.component';
import { ManagerService } from '../service/manager.service';
import { DetailRequestDetailComponent } from './components/request/detailrequestdetail/detailrequestdetail.component';
import { EditRequestDetailComponent } from './components/request/editrequestdetail/editrequestdetail.component';

import { UpdatePhotoComponent } from './components/profile/updatephoto/updatephoto.component';
import { UpdateProfileComponent } from './components/profile/updateprofile/updateprofile.component';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ManagerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProfileComponent,
    AboutComponent,
    PolicyComponent,
    RequestComponent,
    DetailRequestDetailComponent,
    EditRequestDetailComponent,
    UpdatePhotoComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ManagerRouting,
    BrowserAnimationsModule,
    CaptchaModule,
    CascadeSelectModule,
    NgxPopper,   
    CalendarModule,
    PasswordModule,
    ChipsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ConfirmDialogModule,
    ToastModule,
    TableModule
  ],
  providers: [
    AccountService,
    DashboardService,
    EmployeeService,
    AdminService,
    ManagerService,
    ConfirmationService,
    MessageService
  ]
})

export class ManagerModule {

}