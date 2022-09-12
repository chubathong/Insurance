import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';

const routes: Routes = [
    {
        path: 'signin',
        component: SigninComponent,

    }
];

export const SigninRouting = RouterModule.forRoot(routes);