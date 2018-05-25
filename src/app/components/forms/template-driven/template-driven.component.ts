import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

@ViewChild('userForm')
formData:NgForm;

  constructor() { }

  saveData(){

    if(this.formData.valid){
      console.log(this.formData)
    }

  }

  loadData(){
    console.log("==load===");
    const user={
      'name':'Naren',
      'age': '28',
      'email': 'mike@mail.com',
      'address': {
        'city':'pith',
        'pincode':'123456'
      }
    }

   this.formData.form.setValue(user);
  }

  patchData(){
    const user={
      'name':'Naren',
      'address': {
        'city':'bang',
        'pincode':'560068'
      }
    }

   this.formData.form.patchValue(user);
  }

  ngOnInit() {
  }

}
