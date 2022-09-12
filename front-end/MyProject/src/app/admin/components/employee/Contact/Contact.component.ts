import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { AdminService } from 'src/app/service/admin.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hospital } from 'src/app/entity/hospital.entity';
import { Policy } from 'src/app/entity/policy.entity';
import { EmployeeService } from 'src/app/service/employee.service';
import { Contact } from 'src/app/entity/contact.entity';
@Component({
    templateUrl: 'Contact.component.html',
    styleUrls: ['Contact.component.css']
})

export class ContactComponent implements OnInit {
     
    closeResult : string;
    contacts : Contact[];
    name : any;
    p : number = 1;
    addFormPolicy : FormGroup;
    result : Policy;
    constructor(
        private adminService : AdminService,
        private modalService : NgbModal,
        private employeeService : EmployeeService
       
     

    ) { }
    ngOnInit() : void {


          this.employeeService.findallContact().then(
            res => {
              this.contacts = res;
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
        if(this.name == ""){
            this.ngOnInit();
        }else {
            this.contacts= this.contacts.filter(res =>{
                return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
            })
        }
    }
    key : string = 'contactid';
    reverse : boolean = false;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }



}