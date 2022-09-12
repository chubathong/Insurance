import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../entity/employee.entity";
import { JoinRequestDetail } from "../entity/JoinRequestDetail.entity";
import { Policy } from "../entity/policy.entity";
import { policyonEmployee } from "../entity/policyonEmployee.entity";
import { RequestDetail } from "../entity/requestdetail.entity";
import { ResultLogin } from "../entity/resultlogin.entity";
import { UsernameAndPassword } from "../entity/usernameAndPassword.entity";

@Injectable()
export class ManagerService {

    private BASE_URL = "https://localhost:44325/api/manager";
    private loggedIn = false;

    constructor(
        private httpClient : HttpClient,
    ){}

    

    login(usernameAndPassword: UsernameAndPassword) {
        return this.httpClient.post(this.BASE_URL + '/login', usernameAndPassword)
        .toPromise()
        .then(res => res as ResultLogin);
    }
    logout(): void {
        this.loggedIn = false;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }


    findAllEmployee(){
        return this.httpClient.get(this.BASE_URL + 'findallemployee').toPromise().then(
            res => res as Employee[]
        )
    }

    findAllPolicy(){
        return this.httpClient.get(this.BASE_URL + 'findallpolicy').toPromise().then(
            res => res as Policy[]
        )
    }

    
  /*  sendEmail(mail: Mail, files: any){
        return this.httpClient.post(this.BASE_URL + 'sendemail', {mail,files}).toPromise().then(
            res => res as Boolean
        )
    }   */



    //request detail manager
    findAllPolicyonEmployee(){
        return this.httpClient.get(this.BASE_URL + '/findallrequest').toPromise().then(
            res => res as policyonEmployee[]
        )
    }
    findAllrequestsdetail(){
        return this.httpClient.get(this.BASE_URL + '/findallrequestTracking2').toPromise().then(
            res => res as JoinRequestDetail[]
        )
    }
    findAllrequestsdetailManager(){
        return this.httpClient.get(this.BASE_URL + '/findallrequestTracking').toPromise().then(
            res => res as RequestDetail[]
        )
    }


    updatePolicyRequestDetail(requestId: number, requestDetails: RequestDetail){
        return this.httpClient.put(this.BASE_URL + '/updaterequestmanager/' + requestId, requestDetails)
        .toPromise()
        .then( res => res as RequestDetail
        )
    }
    detailRequestdetail(id:number){
        return this.httpClient.get(this.BASE_URL + '/detailrequestmanager/' + id)
        .toPromise()
        .then(res=> res as RequestDetail);
     }
    //request detail employee



}