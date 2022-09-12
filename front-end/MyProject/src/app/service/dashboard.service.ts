import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class DashboardService implements CanActivate {

    constructor(
        private router: Router
    ){}

    canActivate() {
        if(localStorage.getItem('username') == null) {
            this.router.navigate(['/signin']);
            return false;
        } else {
            return true;
        }
    }

}