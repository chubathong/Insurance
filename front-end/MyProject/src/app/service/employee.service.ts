import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Contact } from "../entity/contact.entity";
import { Employee } from "../entity/employee.entity";
import { Feedback } from "../entity/feedback.entity";
import { JoinRequestDetail } from "../entity/JoinRequestDetail.entity";
import { policyonEmployee } from "../entity/policyonEmployee.entity";
import { ResultLogin } from "../entity/resultlogin.entity";
import { UsernameAndPassword } from "../entity/usernameAndPassword.entity";



@Injectable()
export class EmployeeService {
    private BASE_URL: string ='https://localhost:44325/api/employee/';
    private loggedIn = false;
    constructor(
        private httpClient : HttpClient
    ){}

    login(usernameAndPassword: UsernameAndPassword) {
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
   findall(){
    return this.httpClient.get(this.BASE_URL + 'findall')
                .toPromise().then(res =>res as Employee[]);
   }
   findaccountbyusername(username:string){
    return this.httpClient.get(this.BASE_URL + 'findaccountbyusername/'+username)
                .toPromise().then(res =>res as Employee);
   }
   findallContact(){
    return this.httpClient.get(this.BASE_URL + 'findallcontact')
                .toPromise().then(res =>res as Contact[]);
   }
   findallFeedback(){
    return this.httpClient.get(this.BASE_URL + 'findallfeedback')
                .toPromise().then(res =>res as Feedback[]);
   }
   create(employee: Employee){
    return this.httpClient.post(this.BASE_URL + 'create', employee)
        .toPromise()
        .then(
            res => res as Employee);
   }
   createContact(contact: Contact){
    return this.httpClient.post(this.BASE_URL + 'createContact', contact)
        .toPromise()
        .then(
            res => res as Contact);
   }
   createFeedback(feedback: Feedback){
    return this.httpClient.post(this.BASE_URL + 'createFeedback', feedback)
        .toPromise()
        .then(
            res => res as Feedback);
   }
   findAllPolicyOnEmployeeId(id: number){
    return this.httpClient.get(this.BASE_URL + 'findpolicyonemployee/'+ id)
    .toPromise().then(res => res as policyonEmployee[] 
    )
}
   


}