import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { zipCodeValidator } from '../validators';
import { UserDataService } from '../../../services/user-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css'],
  providers: [UserDataService]
})
export class ModelDrivenComponent implements OnInit {

  userForm: FormGroup = null;

  constructor(private uService: UserDataService, private activeRoute: ActivatedRoute) {
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      age: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      address: new FormGroup({
        city: new FormControl(null, [Validators.required]),
        pincode: new FormControl(null, [Validators.required, zipCodeValidator])
      })
    }, { updateOn: 'blur' }); // change/blur/submit
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      (par) =>this.userForm.patchValue({name: par.get('name')})
    );
  }

  public get addressObj(): FormGroup {
    return <FormGroup>this.userForm.get('address');
  }

  saveData() {
    if (this.userForm.valid) {
      const uService$ = this.uService.addUser(this.userForm.value).subscribe(
        (data) => {
          console.log('success', data);
          uService$.unsubscribe();
        },
        (err) => console.log('error', err)
      );
    }

  }
}
