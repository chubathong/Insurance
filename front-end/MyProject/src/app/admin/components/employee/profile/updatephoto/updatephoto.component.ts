import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from 'src/app/entity/employee.entity';
import { FileUploadInfo } from 'src/app/entity/fileuploadinfo';
import { AdminService } from 'src/app/service/admin.service';

import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
    templateUrl: 'updatephoto.component.html',
    styleUrls: ['./updatephoto.component.css']
})

export class UpdatePhotoComponent implements OnInit {
  updateForm: FormGroup;
  employee: Employee;
  
  employeeid:number;
  joindate:Date;
  fullname:string;
  username:string;
  password:string;
  address:string;
  phonenumber:string;
  country:string;
  city:string;
  policyid:number;
  policystatus:string;
  role:string;
  managerid:number;
  email:string;
  photo :string;
  files : any;
  res : any;
  position: string;
  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private httpClient : HttpClient,
    private router: Router,
    private confirmationService:ConfirmationService,
    private messageService: MessageService
  ) { }
  ngOnInit() {
      this.activatedRoute.paramMap.subscribe((params) => {
          var id =parseInt(params.get('id'));
          
          this.adminService.detailEmployee(id).then(data => {
            const { 
              employeeid,
              joindate,
              fullname,
              username,
              password,
              address,
              phonenumber,
              country,
              city,
              policyid,
              policystatus,
              role,
              managerid,
              email,
              photo
              } = data;
    
            this.updateForm = this.formBuilder.group({
              employeeid,
              joindate,
              fullname,
              username,
              password,
              address,
              phonenumber,
              country,
              city,
              policyid,
              policystatus,
              role,
              managerid,
              email,
              photo
            })
          })
        });
    }
    onUpload(event:any) {
      this.files = event.target.files[0];

      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
    selectFiles(eve: any){
      this.files = eve.target.files[0];

    }
    
    update() {
      this.employee = this.updateForm.value;
      console.log(this.employee);
      let formData = new FormData();
    formData.append('file', this.files);
      this.adminService.uploadPhoto(this.employee.employeeid,formData).then(res =>{
        this.res = res;
        alert("Update photo successfully");
        this.router.navigate(['/admin/employee/profile']);
      },
      error =>{
        console.log(error);
      })

    }
    confirm1() {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to update this photo?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
  
              this.employee = this.updateForm.value;
              let formData = new FormData();
            formData.append('file', this.files);
              this.adminService.uploadPhoto(this.employee.employeeid,formData).then(res =>{
                this.res = res;
                this.router.navigate(['/admin/employee/profile']);
                
              },
              error =>{
                console.log(error);
              })
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