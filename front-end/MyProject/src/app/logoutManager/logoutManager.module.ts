import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { EmployeeService } from 'src/app/service/employee.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LogoutManagerComponent } from './logoutManager.component';
import { LogoutManagerRouting} from './logoutManager.routing';
import { AccountService } from '../service/account.service';


@NgModule({
  declarations: [
    LogoutManagerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LogoutManagerRouting,
    BrowserAnimationsModule,   
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [
    EmployeeService,
    AccountService
  ],
  
})


export class LogoutManagerModule {

}