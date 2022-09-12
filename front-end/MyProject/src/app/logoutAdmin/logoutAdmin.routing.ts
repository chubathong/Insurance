
import { Routes, RouterModule } from '@angular/router';
import { LogoutAdminComponent } from './logoutAdmin.component';



const routes: Routes = [
    {
        path: 'logoutAdmin',
        component: LogoutAdminComponent,

    }
];

export const LogoutAdminRouting = RouterModule.forRoot(routes);