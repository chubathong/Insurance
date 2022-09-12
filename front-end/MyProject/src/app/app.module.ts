import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/components/admin.module';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninModule } from './signin/components/signin.module';




import { SignupModule } from './signup/components/signup.module';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoutModule } from './logout/logout.module';
import { ManagerModule } from './manager/manager.module';

import { LogoutAdminModule } from './logoutAdmin/logoutAdmin.module';
import { LogoutManagerModule } from './logoutManager/logoutManager.module';

import { ForgotpasswordModule } from './forgotpassword/forgotpassword.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AdminModule,
    UserModule,
    SigninModule,
    SignupModule,

    NgbModule,
    LogoutModule,
    ManagerModule,

    LogoutAdminModule,
    LogoutManagerModule,

    ForgotpasswordModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
