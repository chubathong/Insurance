
import { Routes, RouterModule } from '@angular/router';

import { ManagerComponent } from './manager.component';
import { HomeComponent } from './components/home/home.component';

import { ProfileComponent } from './components/profile/profile.component';

import { PolicyComponent } from './components/policy/policy.component';
import { RequestComponent } from './components/request/request.component';
import { DetailRequestDetailComponent } from './components/request/detailrequestdetail/detailrequestdetail.component';
import { EditRequestDetailComponent } from './components/request/editrequestdetail/editrequestdetail.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardService } from '../service/dashboard.service';

import { UpdatePhotoComponent } from './components/profile/updatephoto/updatephoto.component';
import { UpdateProfileComponent } from './components/profile/updateprofile/updateprofile.component';



const routes: Routes = [
    {
        path: 'manager',
        component: ManagerComponent,canActivate:[DashboardService],
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            {path: 'contact',component: ContactComponent},
            {path: 'profile',component: ProfileComponent},
            {path: 'profile/updatephoto',component: UpdatePhotoComponent},
            {path: 'profile/updateprofile',component: UpdateProfileComponent},
            {path: 'policy',component: PolicyComponent},
            {path: 'request',component: RequestComponent},
            {path: 'request/details',component: DetailRequestDetailComponent},
            {path: 'request/check',component: EditRequestDetailComponent},
        ]
    }
];
    
export const ManagerRouting = RouterModule.forRoot(routes);