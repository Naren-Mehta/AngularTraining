import {
  Component, OnInit,
  Output, EventEmitter
} from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies = ['INR', 'USD', 'EUR', 'CAD', 'GBP'];

  @Output()
  selected = new EventEmitter();

  constructor(private cService: CurrencyService) { }

  ngOnInit() {
  }

  selectedCurrency(val) {
    // this.selected.emit({ data: val });
    this.cService.updateCurrency(val);
  }
}
