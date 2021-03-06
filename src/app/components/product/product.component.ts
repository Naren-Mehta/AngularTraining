import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  productData: Product;

  @Input()
  ccode: string;

  @Output()
  addProduct = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  addToCart() {
    this.addProduct.emit({ data: this.productData });
  }
}
