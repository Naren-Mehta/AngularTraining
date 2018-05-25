import { Component, OnInit,Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent {

@Input()
ctrl: AbstractControl | AbstractControlDirective


private ERROR_MESSAGES={
  'required' : () =>'This field is required.',
  'minlength' : (p) => 'min char required is ' +p.requiredLength,
  'mazlenght' : (p) => `max chars allowed is ${p.requiredLength}`,
  'zipCode' : (p) => `valid pincode is ${p.validpincode}`
}


shouldShowError() : boolean{

return this.ctrl && this.ctrl.errors && (this.ctrl.touched || this.ctrl.dirty);

}

listOfErrors() : string[]{
  return Object.keys(this.ctrl.errors).map(
    (err) =>this.ERROR_MESSAGES[err](this.ctrl.errors[err])
  );
}
  

}
