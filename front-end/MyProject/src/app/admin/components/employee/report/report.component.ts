import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/entity/employee.entity';

import { AdminService } from 'src/app/service/admin.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestDetail } from 'src/app/entity/requestdetail.entity';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { JoinRequestDetail } from 'src/app/entity/JoinRequestDetail.entity';

@Component({
    templateUrl: 'report.component.html',
    styleUrls: ['report.component.css']
   
})

export class ReportComponent implements OnInit {
    closeResult : string;
    requestDetails : JoinRequestDetail[];

    p : number = 1;
    result : Employee;
    fullname:any;
    requestDate:any;
    policyDescription:any;
    companyName:any;
    status:any;
    @ViewChild('htmlData') htmlData:ElementRef;
    constructor(
        private adminService : AdminService,
        private modalService : NgbModal,
        private formBuilder : FormBuilder,
      
       
     

    ) { }
    ngOnInit() : void {
      
        this.adminService.findAllrequestsdetail().then(
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

  
    key : string = 'requestid';
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


    public openPDF():void {
      let DATA = document.getElementById('htmlData');
          
      html2canvas(DATA).then(canvas => {
          
          let fileWidth = 208;
          let fileHeight = canvas.height * fileWidth / canvas.width;
          
          const FILEURI = canvas.toDataURL('image/png')
          let PDF = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
          
          PDF.save('angular-demo.pdf');
      });     
      }
     

}