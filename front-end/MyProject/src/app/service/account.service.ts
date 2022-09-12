import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResultCheckUsername } from "../entity/resultcheckusername.entity";

import { ResultLogin } from "../entity/resultlogin.entity";
import { UsernameAndPassword } from "../entity/usernameAndPassword.entity";

@Injectable()
export class AccountService{
    private BASE_URL: string = 'https://localhost:44325/api/account/';
    private loggedIn = false;
    constructor(private httpClient: HttpClient) {
    }

    public login(usernameAndPassword: UsernameAndPassword) {
        return this.httpClient.post(this.BASE_URL + 'login', usernameAndPassword)
        .toPromise()
        .then(res => res as ResultLogin);
    }
    logout(): void {
        this.loggedIn = false;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    CheckUsername(username:string) {
        return this.httpClient.get(this.BASE_URL + 'checkusername/' + username )
            .toPromise()
            .then(res => res as ResultCheckUsername);
    }


}