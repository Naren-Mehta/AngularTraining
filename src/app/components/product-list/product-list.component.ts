import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Product } from '../product/product';
import { products } from './products';
import { CartService } from '../../services/cart.service';
import { CurrencyService } from '../../services/currency.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  currentCurrency: string;

  @Output()
  addItem = new EventEmitter();

  productList: Product[];
  currService$;
  constructor(private cService: CartService, private currService: CurrencyService) {
    this.productList = products;
  }

  ngOnInit() {
    this.currService$ = this.currService.currencyObservable.subscribe(
      (code) => this.currentCurrency = <string>code
    );
  }

  sendDataToApp(ev) {
    this.cService.addToCart(ev.data);
    // this.router.navigate(['cart'])
    // this.addItem.emit({ product: ev.data });
  }

  ngOnDestroy() {
    this.currService$.unsubscribe();
  }

}
