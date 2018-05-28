import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { zipCodeValidator } from '../validators';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  userForm: FormGroup = null;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      age: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      addresses: new FormArray([
        this.newAddress()
      ])
    }, { updateOn: 'blur' });
  }

  newAddress() {
    return new FormGroup({
      city: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required, zipCodeValidator])
    });
  }

  public get addressObj(): FormArray {
    return <FormArray>this.userForm.get('addresses');
  }

  addAddress() {
    this.addressObj.push(this.newAddress());
  }

  removeAddress(i: number) {
    this.addressObj.removeAt(i);
  }

  ngOnInit() {
  }

}
