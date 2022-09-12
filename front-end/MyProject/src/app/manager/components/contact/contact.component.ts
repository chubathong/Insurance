import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from 'src/app/entity/contact.entity';
import { AdminService } from 'src/app/service/admin.service';
import { EmployeeService } from 'src/app/service/employee.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent implements OnInit{
  addFormContact: FormGroup;
  result : Contact;
  name: '';
  email: '';
  message: '';
  constructor(
    private formBuilder : FormBuilder,
    private employeeService : EmployeeService
  ) { }
  ngOnInit(): void {
  }
  add(){
    let request: Contact= this.addFormContact.value;
    this.employeeService.createContact(request).then(        
      res=>{            
        this.result = res;
        if(this.result != null){
          const message = `Thanks you ${this.name}!`
          alert(message);
        }
      },
      error=>{

        console.log(error);
      }
      
      
    )
  }


}
