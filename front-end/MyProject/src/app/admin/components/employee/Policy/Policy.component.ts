import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import { AdminService } from 'src/app/service/admin.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hospital } from 'src/app/entity/hospital.entity';
import { Policy } from 'src/app/entity/policy.entity';
import { InsuranceCompany } from 'src/app/entity/InsuranceCompany.entity';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
@Component({
    templateUrl: 'Policy.component.html',
    styleUrls: ['Policy.component.css']
})

export class PolicyComponent implements OnInit {
     
    closeResult : string;
    policys : Policy[];
    policyName : any;
    p : number = 1;
    addFormPolicy : FormGroup;
    result : Policy;
    hospitals : Hospital[];
    companies:InsuranceCompany[];
    position: string;
    constructor(
        private adminService : AdminService,
        private modalService : NgbModal,
        private formBuilder : FormBuilder,
        private confirmationService:ConfirmationService,
        private messageService: MessageService
     

    ) { }
    ngOnInit() : void {
      this.addFormPolicy = this.formBuilder.group({
        policyName :new FormControl(null, Validators.required),
        policyDescription:new FormControl(null, Validators.required),
        amount:new FormControl(null, Validators.required),
        emi:new FormControl(null, Validators.required),
        duration :new FormControl(null, Validators.required),
        companyId:new FormControl(null, Validators.required),
        hospitalId:new FormControl(null, Validators.required)
      });

          this.adminService.findAllPolicy().then(
            res => {
              this.policys = res;
            },
            error => {
              console.log(error);
            }
          )
          this.adminService.listCompany().then(
            res=> {
                this.companies = res;
            },
            error => {
                console.log(error);
            }
            
            
          );
          this.adminService.listHospital().then(
            res=> {
                this.hospitals = res;
            },
            error => {
                console.log(error);
            }
            
            
          );
    }
    add(){
      let policy: Policy = this.addFormPolicy.value;
      console.log(policy);
      policy.companyId =parseInt(this.addFormPolicy.value.companyId);

      this.adminService.addPolicy(policy).then(
        res=>{
          this.result = res;
          if(this.result != null){
            const message = `Create policy successfully!!! Welcome to us!!!`
            alert(message);
          this.addFormPolicy.reset();
          this.adminService.findAllPolicy().then(
            res => {
              this.policys = res;
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
        if(this.policyName == ""){
            this.ngOnInit();
        }else {
            this.policys= this.policys.filter(res =>{
                return res.policyName.toLocaleLowerCase().match(this.policyName.toLocaleLowerCase());
            })
        }
    }
    key : string = 'id';
    reverse : boolean = false;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

    delete(policyId:number){
      this.adminService.deletePolicy(policyId).then(
        res=>{
          this.result = res;
          if(this.result == null){
            const message = `Delete successfully`
            alert(message);
          this.addFormPolicy.reset();
          this.adminService.findAllPolicy().then(
            res => {
              this.policys = res;
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
         );
     }

     
     confirm(policyId:number) {
      this.confirmationService.confirm({
        
          header: 'Confirmation',
          message: 'Are you sure that you want to delete this policy?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            
            this.adminService.deletePolicy(policyId).then(
              res=>{
                this.result = res;
                if(this.result == null){
                  this.messageService.add({severity:'info', summary:'Confirmed', detail:'Delete policy successfully'});
                this.addFormPolicy.reset();
                this.adminService.findAllPolicy().then(
                  res => {
                    this.policys = res;
                  },
                  error => {
                    console.log(error);
                  }
                )
                }
              },
              error=>{
                console.log(error);
                this.messageService.add({severity:'warn', summary:'Warning', detail:'Failed.Because this policy has been linked'});
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