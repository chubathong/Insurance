
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { PolicyComponent } from './components/policy/policy.component';
import { RequestComponent } from './components/request/request.component';
import { RequestEmployeeComponent } from './components/requestEmployee/requestEmployee.component';

import { DashboardService } from '../service/dashboard.service';

import { UpdatePhotoComponent } from './components/profile/updatephoto/updatephoto.component';
import { UpdateProfileComponent } from './components/profile/updateprofile/updateprofile.component';




const routes: Routes = [
    {
        path: 'user',
        component: UserComponent,canActivate:[DashboardService],
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            {path: 'contact',component: ContactComponent},
            {path: 'profile',component: ProfileComponent},
            {path: 'profile/updatephoto',component: UpdatePhotoComponent},
            {path: 'profile/updateprofile',component: UpdateProfileComponent},
            {path: 'feedback',component: FeedbackComponent},
            {path: 'policy',component: PolicyComponent},
            {path: 'request',component: RequestComponent},
            {path: 'requestEmployee',component: RequestEmployeeComponent},

        ]
    }
];
    
export const UserRouting = RouterModule.forRoot(routes);