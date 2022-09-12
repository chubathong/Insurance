import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CheckSecurity } from "../entity/checkSecurity";
import { Employee } from "../entity/employee.entity";
import { FileUploadInfo } from "../entity/fileuploadinfo";
import { Hospital } from "../entity/hospital.entity";
import { InsuranceCompany } from "../entity/InsuranceCompany.entity";
import { JoinRequestDetail } from "../entity/JoinRequestDetail.entity";
import { Policy } from "../entity/policy.entity";
import { policyonEmployee } from "../entity/policyonEmployee.entity";
import { RequestDetail } from "../entity/requestdetail.entity";
import { ResultCheckUsername } from "../entity/resultcheckusername.entity";
import { ResultLogin } from "../entity/resultlogin.entity";
import { ResultSecurity } from "../entity/resultSecurity.entity";
import { UsernameAndPassword } from "../entity/usernameAndPassword.entity";



@Injectable()
export class AdminService {

    private BASE_URL = "https://localhost:44325/api/admin";
    private loggedIn = false;

    constructor(
        private httpClient : HttpClient,
        private http: HttpClient
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

    CheckUsername(username:string) {
        return this.httpClient.get(this.BASE_URL + 'checkusername/' + username )
            .toPromise()
            .then(res => res as ResultCheckUsername);
    }

    findAllEmployee(){
        return this.httpClient.get(this.BASE_URL + '/findallemployee').toPromise().then(
            res => res as Employee[]
        )
    }

    async listManager() {
        let managers : Employee[] = [];
        let employees = await this.findAllEmployee();
        for(let i=0; i< employees.length; i++){
            if(employees[i].role == "manager"){
                managers.push(employees[i]);
            }
        }
        return managers;
    }
    async listPolicy() {
        let policys : Policy[] = [];
        let employees = await this.findAllPolicy();
        for(let i=0; i< employees.length; i++){
                policys.push(employees[i]);           
        }
        return policys;
    }

    async listCompany() {
        let companys : InsuranceCompany[] = [];
        let employees = await this.findAllCompanies();
        for(let i=0; i< employees.length; i++){
            companys.push(employees[i]);           
        }
        return companys;
    }
    async listHospital() {
        let hospitals : Hospital[] = [];
        let employees = await this.findAllHospitals();
        for(let i=0; i< employees.length; i++){
            hospitals.push(employees[i]);           
        }
        return hospitals;
    }

    addpolicyonemployee(policyonEmployee : policyonEmployee){
        return this.httpClient.post(this.BASE_URL + '/addpolicyonemployee', policyonEmployee).toPromise().then(
            res => res as policyonEmployee
        );
    }
    async employeeId() {
        let employeeid : Employee[] = [];
        let employees = await this.findAllEmployee();
        for(let i=0; i< employees.length; i++){
            employeeid .push(employees[i]);           
        }
        return employeeid;
    }

    async findByUsername(username: string, password: string) {
        let employee : Employee[] = [];
        let employees = await this.findAllEmployee();
        for(let i=0; i< employees.length;i++){
            if(employees[i].username == username && employees[i].password == password){
                employee.push(employees[i]);
            }
        }
        return employee;
    }

    addEmployee(employee: Employee){
        return this.httpClient.post(this.BASE_URL + 'addemployee', employee).toPromise().then(
            res => res as Employee
        );
    }

    addCompany(company: InsuranceCompany){
        return this.httpClient.post(this.BASE_URL + '/addcompany', company).toPromise().then(
            res => res as InsuranceCompany
        );
    }
    addHospital(hospital: Hospital){
        return this.httpClient.post(this.BASE_URL + '/addhospital', hospital).toPromise().then(
            res => res as Hospital
        )
    }

    addPolicy(policy: Policy){
        return this.httpClient.post(this.BASE_URL + '/addpolicy', policy).toPromise().then(
            res => res as Policy
        );
    }

    findAllHospitals(){
        return this.httpClient.get(this.BASE_URL + '/findallhospitals')
        .toPromise().then(res => res as Hospital[] 
        )
    }

    findAllCompanies(){
        return this.httpClient.get(this.BASE_URL + '/findallcompanies')
        .toPromise().then(res => res as InsuranceCompany[] 
        )
    }

    findAllPolicy(){
        return this.httpClient.get(this.BASE_URL + '/findallpolicy').toPromise().then(
            res => res as Policy[]
        )
    }
    deleteHospital(hospitalId: string){
        return this.httpClient.delete(this.BASE_URL + '/deletehospital/' + hospitalId)
        .toPromise()
        .then(res=> res as Hospital);
     }
     deleteCompany(companyId: number){
        return this.httpClient.delete(this.BASE_URL + '/deletecompany/' + companyId)
        .toPromise()
        .then(res=> res as InsuranceCompany);
     }
     deletePolicy(policyId: number){
        return this.httpClient.delete(this.BASE_URL + '/deletepolicy/' + policyId)
        .toPromise()
        .then(res=> res as Policy);
     }
     deleteEmployee(employeeid: number){
        return this.httpClient.delete(this.BASE_URL + '/deleteemployee/' + employeeid)
        .toPromise()
        .then(res=> res as Employee);
     }
     detailEmployee(id: number){
        return this.httpClient.get(this.BASE_URL + '/detailemployee/' + id)
        .toPromise()
        .then(res=> res as Employee);
     }
     detailHospital(id: string){
        return this.httpClient.get(this.BASE_URL + '/detailhospital/' + id)
        .toPromise()
        .then(res=> res as Hospital);
     }
     detailPolicy(id: number){
        return this.httpClient.get(this.BASE_URL + '/detailpolicy/' + id)
        .toPromise()
        .then(res=> res as Policy);
     }
     detailCompany(id: number){
        return this.httpClient.get(this.BASE_URL + '/detailcompany/' + id)
        .toPromise()
        .then(res=> res as InsuranceCompany);
     }
     updateEmployee(id: number, employee: Employee) {
        return this.httpClient.put(this.BASE_URL + '/updateEmployee/' + id, employee)
            .toPromise()
            .then(res => res as Employee);
     }
     updateHospital(id: string, hospital: Hospital) {
        return this.httpClient.put(this.BASE_URL + '/updateHospital/' + id, hospital)
            .toPromise()
            .then(res => res as Hospital);
     }
     updateCompany(id: number, company: InsuranceCompany) {
        return this.httpClient.put(this.BASE_URL + '/updateCompany/' + id, company)
            .toPromise()
            .then(res => res as InsuranceCompany);
     }
     updatePolicy(id: number, policy: Policy) {
        return this.httpClient.put(this.BASE_URL + '/updatePolicy/' + id, policy)
            .toPromise()
            .then(res => res as Policy);
     }
     findEmployee(username:string){
        return this.httpClient.get(this.BASE_URL + '/findbyusername/' + username).toPromise().then(
            res => res as Employee
        )
    }
    findPolicyOnEmployee(policyname:string){
        return this.httpClient.get(this.BASE_URL + '/findbypolicyname/' + policyname).toPromise().then(
            res => res as policyonEmployee
        )
    }


    addRequest(requestDetail: RequestDetail){
        return this.httpClient.post(this.BASE_URL + '/addrequest', requestDetail).toPromise().then(
            res => res as JoinRequestDetail
        );
    }
    findrequestDetail(id: number){
        return this.httpClient.get(this.BASE_URL + '/findrequestmanager/' + id).toPromise().then(
            res => res as JoinRequestDetail[]
        )
    }
    findAllrequestsdetail(){
        return this.httpClient.get(this.BASE_URL + '/findallrequestTracking2').toPromise().then(
            res => res as JoinRequestDetail[]
        )
    }
    findAllrequestsdetail2(){
        return this.httpClient.get(this.BASE_URL + '/findallrequestTracking').toPromise().then(
            res => res as RequestDetail[]
        )
    }
    findAllPolicyOnEmployee(){
        return this.httpClient.get(this.BASE_URL + '/findallrequest')
        .toPromise().then(res => res as policyonEmployee[] 
        )
    }

    findPolicy(id: number){
        return this.httpClient.get(this.BASE_URL + '/findpolicy/' + id).toPromise().then(
            res => res as Policy
        )
    }
    createSecurityCode(username : string, employee : Employee){
        return this.httpClient.put(this.BASE_URL + '/createSecurityCode/' + username, employee)
            .toPromise()
            .then(res => res as Employee);
    }
    
    changepassword(username : string, employee : Employee){
        return this.httpClient.put(this.BASE_URL + '/changepassword/' + username, employee)
        .toPromise()
        .then(res => res as Employee);
    }
    securitycheck(checkSecurity : CheckSecurity){
        return this.httpClient.post(this.BASE_URL + '/securitycheck', checkSecurity).toPromise().then(
            res => res as ResultSecurity
        )
    }
    uploadPhoto(id: number, formData : FormData){
        return this.httpClient.post(this.BASE_URL + '/uploads/' + id, formData ).toPromise().then(
            res => res as FileUploadInfo)
    }


}