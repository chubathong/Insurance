import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardService } from 'src/app/service/dashboard.service';


import { AdminComponent } from './admin.component';
import { CompanyComponent } from './employee/Company/Company.component';
import { CompanyDetailComponent } from './employee/Company/detail/detailcompany.component';
import { EditCompanyComponent } from './employee/Company/edit/editcompany.component';
import { ContactComponent } from './employee/Contact/Contact.component';
import { FeedbackComponent } from './employee/Feedback/Feedback.component';
import { HomeAdminComponent } from './employee/Home/home.component';
import { HospitalDetailComponent } from './employee/Hospital/detail/detailhospital.component';
import { EditHospitalComponent } from './employee/Hospital/edit/edithospital.component';
import { HospitalComponent } from './employee/Hospital/Hospital.component';
import { EmployeeDetailComponent } from './employee/list/detail/detail.component';
import { EditEmployeeComponent } from './employee/list/edit/edit.component';


import { EmployeeListComponent } from './employee/list/list.component';
import { PolicyDetailComponent } from './employee/Policy/detail/detailpolicy.component';
import { EditPolicyComponent } from './employee/Policy/edit/editPolicy.component';
import { PolicyComponent } from './employee/Policy/Policy.component';

import { ProfileComponent } from './employee/profile/profile.component';
import { UpdatePhotoComponent } from './employee/profile/updatephoto/updatephoto.component';
import { UpdateProfileComponent } from './employee/profile/updateprofile/updateprofile.component';
import { ReportComponent } from './employee/report/report.component';



const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,canActivate:[DashboardService],
        children: [
            { path: '', component: HomeAdminComponent },
            { path: 'employee/home', component: HomeAdminComponent },
            { path: 'employee', component: EmployeeListComponent },
            { path: 'employee/list', component: EmployeeListComponent },
            { path: 'employee/list/edit', component: EditEmployeeComponent },

            { path: 'employee/list/details', component: EmployeeDetailComponent },
            { path: 'employee/company', component: CompanyComponent },
            { path: 'employee/company/details', component: CompanyDetailComponent },
            { path: 'employee/company/edit', component: EditCompanyComponent },
            { path: 'employee/hospital', component: HospitalComponent },
            { path: 'employee/hospital/details', component: HospitalDetailComponent },
            { path: 'employee/hospital/edit', component: EditHospitalComponent },
            { path: 'employee/policy', component: PolicyComponent },
            { path: 'employee/policy/details', component: PolicyDetailComponent },
            { path: 'employee/policy/edit', component: EditPolicyComponent },
            { path: 'employee/report', component: ReportComponent },
            { path: 'employee/profile', component: ProfileComponent },
            { path: 'employee/profile/updatephoto', component: UpdatePhotoComponent },
            { path: 'employee/profile/updateprofile', component: UpdateProfileComponent },
            { path: 'employee/contact', component: ContactComponent },
            { path: 'employee/feedback', component: FeedbackComponent },
        ]
    }
];

export const AdminRouting = RouterModule.forRoot(routes);