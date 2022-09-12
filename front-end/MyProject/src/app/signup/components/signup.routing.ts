
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';


const routes: Routes = [
    {
        path: 'signup',
        component: SignupComponent,

    }
];

export const SignupRouting = RouterModule.forRoot(routes);