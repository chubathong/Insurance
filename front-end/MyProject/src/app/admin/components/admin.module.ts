import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routing';
import { EmployeeListComponent } from './employee/list/list.component';
import {EditEmployeeComponent } from './employee/list/edit/edit.component';
import { EmployeeService } from 'src/app/service/employee.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CompanyComponent } from './employee/Company/Company.component';
import { AdminService } from 'src/app/service/admin.service';
import { HospitalComponent } from './employee/Hospital/Hospital.component';
import { PolicyComponent } from './employee/Policy/Policy.component';
import { EmployeeDetailComponent } from './employee/list/detail/detail.component';
import { HospitalDetailComponent } from './employee/Hospital/detail/detailhospital.component';
import { CompanyDetailComponent } from './employee/Company/detail/detailcompany.component';
import { PolicyDetailComponent } from './employee/Policy/detail/detailpolicy.component';
import { EditHospitalComponent } from './employee/Hospital/edit/edithospital.component';
import { EditCompanyComponent } from './employee/Company/edit/editcompany.component';
import { EditPolicyComponent } from './employee/Policy/edit/editPolicy.component';
import { ReportComponent } from './employee/report/report.component';
import { HomeAdminComponent } from './employee/Home/home.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { DashboardService } from 'src/app/service/dashboard.service';
import { FeedbackComponent } from './employee/Feedback/Feedback.component';
import { ContactComponent } from './employee/Contact/Contact.component';

import { UpdateProfileComponent } from './employee/profile/updateprofile/updateprofile.component';

import { UpdatePhotoComponent } from './employee/profile/updatephoto/updatephoto.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AdminComponent,
    EmployeeListComponent,  
    CompanyComponent,
    HospitalComponent,
    PolicyComponent,
    EmployeeDetailComponent,
    HospitalDetailComponent,
    CompanyDetailComponent,
    PolicyDetailComponent,
    EditEmployeeComponent,
    EditHospitalComponent,
    EditCompanyComponent,
    EditPolicyComponent,
    ReportComponent,
    HomeAdminComponent,
    ProfileComponent,
    FeedbackComponent,
    ContactComponent,
    UpdateProfileComponent,
    ProfileComponent,
    UpdatePhotoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRouting,
    BrowserAnimationsModule,   
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ConfirmDialogModule,
    ToastModule,

  ],
  providers: [
    EmployeeService,
    AdminService,
    DashboardService,
    ConfirmationService,
    MessageService
    
  ],
  
})


export class AdminModule {

}