import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestDetail } from 'src/app/entity/requestdetail.entity';

import { AdminService } from 'src/app/service/admin.service';
import { ManagerService } from 'src/app/service/manager.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JoinRequestDetail } from 'src/app/entity/JoinRequestDetail.entity';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  closeResult : string;
  addFormRequest: FormGroup;
  requestDetails : JoinRequestDetail[];
  result : RequestDetail;
  CompanyName : any;
  fullname:any;
  requestDate:any;
  policyDescription:any;
  companyName:any;
  status:any;
  p : number = 1;
  requests : RequestDetail[];
  constructor(
    private adminService : AdminService,
    private managerService : ManagerService,
    private modalService : NgbModal

  ) { 

  }

  ngOnInit() {
    this.managerService.findAllrequestsdetail().then(
      res => {
        this.requestDetails = res;
      },
      error => {
        console.log(error);
      }
    )
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



key : string = 'id';
reverse : boolean = false;
sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
}
searchdate(){
  if(this.requestDate == ""){
      this.ngOnInit();
  }else {
      this.requestDetails= this.requestDetails.filter(res =>{
          return res.requestDate.toLocaleLowerCase().match(this.requestDate.toLocaleLowerCase());
      })
  }
}
search(){
if(this.fullname == ""){
    this.ngOnInit();
}else {
    this.requestDetails= this.requestDetails.filter(res =>{
        return res.fullname.toLocaleLowerCase().match(this.fullname.toLocaleLowerCase());
    })
}
}
searchpolicy(){
if(this.policyDescription == ""){
  this.ngOnInit();
}else {
  this.requestDetails= this.requestDetails.filter(res =>{
      return res.policyDescription.toLocaleLowerCase().match(this.policyDescription.toLocaleLowerCase());
  })
}
}
searchstatus(){
if(this.status == ""){
  this.ngOnInit();
}else {
  this.requestDetails= this.requestDetails.filter(res =>{
      return res.status.toLocaleLowerCase().match(this.status.toLocaleLowerCase());
  })
}
}
searchcompanyname(){
if(this.companyName == ""){
  this.ngOnInit();
}else {
  this.requestDetails= this.requestDetails.filter(res =>{
      return res.companyName.toLocaleLowerCase().match(this.companyName.toLocaleLowerCase());
  })
}
}

}


