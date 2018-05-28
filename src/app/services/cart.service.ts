import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {

  private _cartList = [];
  private cartSubject =new BehaviorSubject(this._cartList);// new Subject();
  cartObservable = this.cartSubject.asObservable();

  constructor() {
  }

  removeFromCart(i) {
    this._cartList.splice(i, 1);
    this.cartSubject.next(this._cartList);
  }

  addToCart(product) {
    const p = this._cartList.find(
      (pr) => pr.productId === product.productId
    );
    if (p) {
      p['qty'] += 1;
    } else {
      const prod = { ...product, qty: 1 };
      this._cartList = [...this._cartList, prod];
    }
    this.cartSubject.next(this._cartList);
  }

}
