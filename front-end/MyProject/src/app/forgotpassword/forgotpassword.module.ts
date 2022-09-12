import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { EmployeeService } from 'src/app/service/employee.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { forgotpasswordRouting } from './forgotpassword.routing';
import { ForgotpasswordComponent } from './forgotpassword.component';
import { AdminService } from '../service/admin.service';
import { UpdateProfileComponent } from '../admin/components/employee/profile/updateprofile/updateprofile.component';

@NgModule({
  declarations: [
   ForgotpasswordComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    forgotpasswordRouting,
    BrowserAnimationsModule,   
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [
    EmployeeService, AdminService
  ],
  
})


export class ForgotpasswordModule {

}