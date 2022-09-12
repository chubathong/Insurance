import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/entity/employee.entity';

import { EmployeeService } from 'src/app/service/employee.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/service/admin.service';
import { InsuranceCompany } from 'src/app/entity/InsuranceCompany.entity';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
    templateUrl: 'Company.component.html',
    styleUrls: ['Company.component.css']
})

export class CompanyComponent implements OnInit {
     
    closeResult : string;
    companies : InsuranceCompany[];
    CompanyName : any;
    p : number = 1;
    addFormCompany : FormGroup;
    result : InsuranceCompany;
    position: string;
    constructor(
        private adminService : AdminService,
        private modalService : NgbModal,
        private formBuilder : FormBuilder,
        private confirmationService:ConfirmationService,
        private messageService: MessageService
     

    ) { }
    ngOnInit() : void {
      this.addFormCompany = this.formBuilder.group({
        companyName :new FormControl(null, Validators.required),
        address :new FormControl(null, Validators.required),
        phone :new FormControl(null, Validators.required),
        url :new FormControl(null, Validators.required)
      });

          this.adminService.findAllCompanies().then(
            res => {
              this.companies = res;
            },
            error => {
              console.log(error);
            }
          )
    }
    add(){
      let company: InsuranceCompany = this.addFormCompany.value;
      this.adminService.addCompany(company).then(
        res=>{
          this.result = res;
          if(this.result != null){

          this.addFormCompany.reset();
          this.adminService.findAllCompanies().then(
            res => {
              this.companies = res;
            },
            error => {
              console.log(error);
            }
          )
          }
        },
        error=>{
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
        if(this.CompanyName == ""){
            this.ngOnInit();
        }else {
            this.companies= this.companies.filter(res =>{
                return res.companyName.toLocaleLowerCase().match(this.CompanyName.toLocaleLowerCase());
            })
        }
    }
    key : string = 'id';
    reverse : boolean = false;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

     confirm(companyId:number) {
      this.confirmationService.confirm({
        
          header: 'Confirmation',
          message: 'Are you sure that you want to delete this company?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            
            this.adminService.deleteCompany(companyId).then(
              res=>{
                this.result = res;
                if(this.result == null){
                  this.messageService.add({severity:'info', summary:'Confirmed', detail:'Delete company successfully'});

                this.addFormCompany.reset();
                this.adminService.findAllCompanies().then(
                  res => {
                    this.companies = res;
                  },
                  error => {
                    console.log(error);
                  }
                )
                }
              },
              error=>{
                this.messageService.add({severity:'warn', summary:'Confirmed', detail:'Failed.Because this company has been linked'});
              }
               );
          },
          reject: (type) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
      });
    }



}