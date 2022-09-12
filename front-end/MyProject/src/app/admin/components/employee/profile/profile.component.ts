import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/entity/employee.entity';
import { AdminService } from 'src/app/service/admin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  employee: Employee;
  updateForm: FormGroup;
  files : any;
  res : any;
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
  policydescription:string;
  constructor(
    private adminService:AdminService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private httpClient : HttpClient
  ) { }

  ngOnInit() {
    this.adminService.findEmployee(localStorage.getItem('username')).then(
      res =>{
        this.employee=res;
        console.log(this.employee.photo);
        this.activatedRoute.paramMap.subscribe((params) => {
          var id =parseInt(params.get('employee.employeeid'));
          

    
            this.updateForm = this.formBuilder.group({
              employeeid:'',
              joindate:'',
              fullname:'',
              username:'',
              password:'',
              address:'',
              phonenumber:'',
              policydescription:'',
              country:'',
              city:'',
              policyid:'',
              policystatus:'',
              role:'',
              managerid:'',
              email:'',
              photo: ''
            })
         
        });
      },
      error =>{
        console.log(error);
      }
      
    )

  }
  selectFiles(eve: any){
    this.files = eve.target.files;
}
upload(){
  let formData = new FormData();
  for (let file of this.files) {
       formData.append('files', file);
  }
  this.httpClient.post('http://localhost:38937/api/admin/uploads', formData).toPromise().then(
      res => {
          console.log(res);
          this.res = res;
      },
      err => {
          console.log(err);
      }
  );
}

  update() {
    let employee: Employee = this.updateForm.value;
    
    this.adminService.updateEmployee(employee.employeeid, employee).then(
      res => {
        this.employee = res;
        if (this.employee != null) {
          alert('update a employee successfully');
        }
      },
      error => {
        console.log(error);
      }
    )
  }
  
}
