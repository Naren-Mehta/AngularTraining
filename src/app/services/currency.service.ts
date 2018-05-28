import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CurrencyService {

  private currencyCode = environment.currency;
  private currencySubject = new BehaviorSubject(this.currencyCode);//new Subject();
  currencyObservable = this.currencySubject.asObservable();

  constructor() { }

  updateCurrency(code) {
    this.currencyCode = code;
    this.currencySubject.next(this.currencyCode);
  }
}
