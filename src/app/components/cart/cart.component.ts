import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyService } from '../../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  currentCurrency: string;
  currService$: Subscription;
  cartItems;
  cService$;

  constructor(private cService: CartService, private currService: CurrencyService) { }

  ngOnInit() {
    this.cService$ = this.cService.cartObservable.subscribe(
      (data) => this.cartItems = data
    );

    this.currService$ = this.currService.currencyObservable.subscribe(
      (code) => this.currentCurrency = <string>code
    );
  }

  removeProduct(i) {
    this.cService.removeFromCart(i);
  }

  ngOnDestroy() {
    this.cService$.unsubscribe();
    this.currService$.unsubscribe();
  }

}
