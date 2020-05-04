import { Component } from '@angular/core';
import  { User }  from './user';
import { Address } from './address'
import { from } from 'rxjs';
import { EnrollmentService } from './enrollment.service'
import { Errors } from './Errors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tdf';
  topics = ["Angular","React","vue"];
  address = new Address("25 Innova Dr","Bedford","NS","B4B1T2");
  user = new  User("tony rong","tony@cd.com","902-234-1932",
              "Angular","morning", true, this.address);
  hasError = true;
  submitted = false;
  error = new Errors();
  constructor(private enrollmentService: EnrollmentService){}
  validateTopic(value,e?){
    console.log(e);
    if(value === "default"){
      this.hasError=true;
    }else{
      this.hasError=false;
    }
  }
  onSubmit(userForm){
    console.log("userForm:",userForm);
    this.enrollmentService.enroll(userForm.form.value).subscribe(
      data => {
        console.log("data:",data);
        this.submitted = true;
        this.showResult();
      },
      err => {
        //console.log("error:",err);
        this.error.status = err.status;
        this.error.errorMesssage = err.message;
        this.error.statusText = err.statusText;
        this.showResult();
      }
    );
  }
  showResult(){
    if(this.submitted){
      this.title = "Thanks your submit!";
    }else{
      
     // this.title = JSON.stringify(this.error);
     // console.log("error:",this.title);
    }
  }
  
}
