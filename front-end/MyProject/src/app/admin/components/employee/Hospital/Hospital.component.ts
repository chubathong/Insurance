import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hospital } from 'src/app/entity/hospital.entity';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
@Component({
    templateUrl: 'Hospital.component.html',
    styleUrls: ['Hospital.component.css']
})

export class HospitalComponent implements OnInit {
     
    closeResult : string;
    hospitals : Hospital[];
    hospitalname : any;
    hospital:Hospital;
    p : number = 1;
    addFormHospital : FormGroup;
    result : Hospital;
    position: string;
    constructor(
        private adminService : AdminService,
        private modalService : NgbModal,
        private formBuilder : FormBuilder,
        private confirmationService:ConfirmationService,
        private messageService: MessageService
     

    ) { }
    ngOnInit() : void {
      this.addFormHospital = this.formBuilder.group({
        hospitalId :new FormControl(null, Validators.required),
        hospitalname :new FormControl(null, Validators.required),
        phoneNumber:new FormControl(null, Validators.required),
        location:new FormControl(null, Validators.required),
        url :new FormControl(null, Validators.required),
      });

          this.adminService.findAllHospitals().then(
            res => {
              this.hospitals = res;
            },
            error => {
              console.log(error);
            }
          )
    }
    add(){
      let hospital: Hospital = this.addFormHospital.value;
      this.adminService.addHospital(hospital).then(
        res=>{
          this.result = res;
          if(this.result != null){
            const message = `Create hospital successfully!!! Welcome to us!!!`
            alert(message);
          this.addFormHospital.reset();
          this.adminService.findAllHospitals().then(
            res => {
              this.hospitals = res;
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
        if(this.hospitalname == ""){
            this.ngOnInit();
        }else {
            this.hospitals= this.hospitals.filter(res =>{
                return res.hospitalname.toLocaleLowerCase().match(this.hospitalname.toLocaleLowerCase());
            })
        }
    }
    key : string = 'id';
    reverse : boolean = false;
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

    delete(hospitalId:string){
      this.adminService.deleteHospital(hospitalId).then(
        res=>{
          this.result = res;
          if(this.result == null){
            const message = `Delete successfully`
            alert(message);
          this.addFormHospital.reset();
          this.adminService.findAllHospitals().then(
            res => {
              this.hospitals = res;
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


     confirm(hospitalId:string) {
      this.confirmationService.confirm({
        
          header: 'Confirmation',
          message: 'Are you sure that you want to delete this hospital?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            
            this.adminService.deleteHospital(hospitalId).then(
              res=>{
                this.result = res;
                if(this.result == null){
                  this.messageService.add({severity:'info', summary:'Confirmed', detail:'Delete hospital successfully'});

                  this.addFormHospital.reset();
                  this.adminService.findAllHospitals().then(
                    res => {
                      this.hospitals = res;
                    },
                    error => {
                      console.log(error);
                    }
                )
                }
              },
              error=>{
                this.messageService.add({severity:'warn', summary:'Confirmed', detail:'Failed.Because this hospital has been linked'});
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