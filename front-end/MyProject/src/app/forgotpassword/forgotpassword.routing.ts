import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword.component';


const routes: Routes = [
    {
        path: 'forgotpassword',
        component: ForgotpasswordComponent,

    }
];

export const forgotpasswordRouting = RouterModule.forRoot(routes);