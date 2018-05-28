import { Directive, ElementRef, HostListener } from '@angular/core';
// <input type="text" appCalendar/>
@Directive({
  selector: '[appCalendar]'
})
export class CalendarDirective {

  constructor(private eRef: ElementRef) { }

  @HostListener('keypress')
  appendSlash() {
    const ele = this.eRef.nativeElement;
    if (ele.value.length === 2 || ele.value.length === 5) {
      ele.value += '/';
    }
  }

}
