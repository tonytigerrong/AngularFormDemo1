import { Component } from '@angular/core';
import  { User }  from './user';
import { Address } from './address'
import { from } from 'rxjs';
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
              "default","morning", true, this.address);
  hasError = true;
  validateTopic(value){
    if(value === "default"){
      this.hasError=true;
    }else{
      this.hasError=false;
    }
  }
  
}
