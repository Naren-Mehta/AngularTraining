import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCalendar]'
})
export class CalendarDirective {

  constructor(private eRef : ElementRef) {}


    @HostListener('keypress')
    appendSlash(){

      const ele = this.eRef.nativeElement;

      const pattern = /[0-9\+\-\ ]/;
      let inputChar = String.fromCharCode(ele.value);


      console.log(ele.value);
      console.log(pattern.test(inputChar));
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }

      
      if(ele.value.length <10){
        if(ele.value.length ==2 || ele.value.length ===5 ){
          ele.value+='/';
      }
      }
      

    }
    // if(length== 2 || length ==5 || )


}
