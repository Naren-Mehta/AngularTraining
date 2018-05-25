import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { zipCodeValidator } from 'src/app/components/forms/validatiors';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {


  userForm : FormGroup =null;


  constructor() { 

this.userForm=new FormGroup({
  name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  age: new FormControl(null, [Validators.required]),
  email: new FormControl(null, [Validators.required, Validators.email]),
  address: new FormGroup({
    city: new FormControl(null, [Validators.required]),
    pincode: new FormControl(null, [Validators.required, zipCodeValidator]),
  })
})

  }

  public get addressObj() : FormGroup{
    return <FormGroup>this.userForm.get('address');
  }

  ngOnInit() {
  }

}
