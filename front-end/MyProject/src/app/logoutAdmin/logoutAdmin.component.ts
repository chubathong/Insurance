import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../service/account.service';


@Component({
    templateUrl: 'logoutAdmin.component.html'
})

export class LogoutAdminComponent implements OnInit {

    constructor(
        private accountService: AccountService,
        private router: Router
    ) { }

    ngOnInit() {
        localStorage.removeItem('username');
        this.accountService.logout();
        this.router.navigate(['/signinAdmin']);
    }

}