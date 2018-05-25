import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {


  currencies : string[]=[];
  
@Output()
selectedCurrency=new EventEmitter();

  changeSelectedCurrency(currency){
    this.selectedCurrency.emit({data:currency});
  }

  constructor() { 

    this.currencies=["USD","EUR","INR","CAD","GBP"]

  }

  ngOnInit() {
  }

}
