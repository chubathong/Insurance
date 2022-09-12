
import { Routes, RouterModule } from '@angular/router';
import { LogoutManagerComponent } from './logoutManager.component';



const routes: Routes = [
    {
        path: 'logoutManager',
        component: LogoutManagerComponent,

    }
];

export const LogoutManagerRouting = RouterModule.forRoot(routes);