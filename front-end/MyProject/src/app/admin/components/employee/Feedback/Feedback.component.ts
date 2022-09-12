import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { AdminService } from 'src/app/service/admin.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hospital } from 'src/app/entity/hospital.entity';
import { Policy } from 'src/app/entity/policy.entity';
import { EmployeeService } from 'src/app/service/employee.service';
import { Feedback } from 'src/app/entity/feedback.entity';
@Component({
    templateUrl: 'Feedback.component.html',
    styleUrls: ['Feedback.component.css']
})

export class FeedbackComponent implements OnInit {
     
    closeResult : string;
    feedbacks : Feedback[];
    rate : any;
    Name : any;
    p : number = 1;
    addFormPolicy : FormGroup;
    result : Policy;
    constructor(
        private adminService : AdminService,
        private modalService : NgbModal,
        private formBuilder : FormBuilder,
        private employeeService : EmployeeService
       
     

    ) { }
    ngOnInit() : void {

      this.employeeService.findallFeedback().then(
        res => {
          this.feedbacks = res;
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

   
    search(){
        if(this.rate == ""){
            this.ngOnInit();
        }else {
            this.feedbacks= this.feedbacks.filter(res =>{
                return res.rate.toLocaleLowerCase().match(this.rate.toLocaleLowerCase());
            })
        }
    }
    key : string = 'feedbackid';
    reverse : boolean = false;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }



}