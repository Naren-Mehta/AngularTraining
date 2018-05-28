import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('userForm')
  formData: NgForm;

  constructor() { }

  ngOnInit() { }

  saveData() {
    if (this.formData.valid) {
      console.log(this.formData);
    }
  }

  loadData() {
    const user = {
      'name': 'mike', 'age': '21', 'email': 'mike@mail.com',
      'address': { 'city': 'test', 'pincode': '123456' }
    };
    this.formData.form.setValue(user); // full/complete updates
  }

  patchData() {
    const user = {
      'name': 'test', 'age': '25'
    };
    this.formData.form.patchValue(user);  // partial updates
  }
}
