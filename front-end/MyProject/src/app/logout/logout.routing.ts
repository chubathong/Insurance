
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout.component';



const routes: Routes = [
    {
        path: 'logout',
        component: LogoutComponent,

    }
];

export const LogoutRouting = RouterModule.forRoot(routes);