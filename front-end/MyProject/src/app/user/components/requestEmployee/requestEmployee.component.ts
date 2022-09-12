import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/entity/employee.entity';
import { Policy } from 'src/app/entity/policy.entity';
import { RequestDetail } from 'src/app/entity/requestdetail.entity';

import { AdminService } from 'src/app/service/admin.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JoinRequestDetail } from 'src/app/entity/JoinRequestDetail.entity';




@Component({
  selector: 'app-request',
  templateUrl: './requestEmployee.component.html',
  styleUrls: ['./requestEmployee.component.css']
})
export class RequestEmployeeComponent implements OnInit {

  closeResult : string;
  requestemployees : JoinRequestDetail[];

  employee: Employee;

  p : number = 1;
  result : Employee;

  fullname:any;
  requestDate:any;
  policyDescription:any;
  companyName:any;
  status:any;
  constructor(
   private adminService:AdminService,
   private modalService : NgbModal,
) { }

  ngOnInit()  :void{
    
    this.adminService.findEmployee(localStorage.getItem('username')).then(
      res =>{
        this.employee=res;


        console.log(this.employee);
        console.log(this.employee.employeeid);
        this.adminService.findrequestDetail(this.employee.employeeid).then(
          res => {
            this.requestemployees = res;
            console.log(this.requestemployees);

          },
          error => {
            console.log(error);
          }
          
          
        )

      },
      error =>{
        console.log(error);
      }
      
      
    )



  }
  searchdate(){
    if(this.requestDate == ""){
        this.ngOnInit();
    }else {
        this.requestemployees= this.requestemployees.filter(res =>{
            return res.requestDate.toLocaleLowerCase().match(this.requestDate.toLocaleLowerCase());
        })
    }
  }
  search(){
  if(this.fullname == ""){
      this.ngOnInit();
  }else {
      this.requestemployees= this.requestemployees.filter(res =>{
          return res.fullname.toLocaleLowerCase().match(this.fullname.toLocaleLowerCase());
      })
  }
  }
  searchpolicy(){
  if(this.policyDescription == ""){
    this.ngOnInit();
  }else {
    this.requestemployees= this.requestemployees.filter(res =>{
        return res.policyDescription.toLocaleLowerCase().match(this.policyDescription.toLocaleLowerCase());
    })
  }
  }
  searchstatus(){
  if(this.status == ""){
    this.ngOnInit();
  }else {
    this.requestemployees= this.requestemployees.filter(res =>{
        return res.status.toLocaleLowerCase().match(this.status.toLocaleLowerCase());
    })
  }
  }
  searchcompanyname(){
  if(this.companyName == ""){
    this.ngOnInit();
  }else {
    this.requestemployees= this.requestemployees.filter(res =>{
        return res.companyName.toLocaleLowerCase().match(this.companyName.toLocaleLowerCase());
    })
  }
  }

  key : string = 'requestid';
  reverse : boolean = false;
  sort(key) {
      this.key = key;
      this.reverse = !this.reverse;
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
    



}
