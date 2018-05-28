import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';
// ng g component components/forms/show-error
@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent {

  @Input()
  ctrl: AbstractControl | AbstractControlDirective;

  private ERROR_MESSAGES = {
    'required': () => 'This field is required',
    'minlength': (p) => 'min chars required is ' + p.requiredLength,
    'maxlength': (p) => `max chars allowed is ${p.requiredLength}`,
    'zipCode': (p) => `valid pincode is ${p.validpincode}`
  };

  shouldShowErrors(): boolean {
    return this.ctrl && this.ctrl.errors && (this.ctrl.touched || this.ctrl.dirty);
  }

  listOfErrors(): string[] {
    return Object.keys(this.ctrl.errors).map(
      (err) => this.ERROR_MESSAGES[err](this.ctrl.errors[err])
    );
  }

}
