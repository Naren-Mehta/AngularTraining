import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Product} from './product'
// import {  } from '@angular/core/src/metadata/directives';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  @Input()
  prodData: Product=null;

  @Input()
  selectedCurrency:string='null';


  cartItem: Product[]=[];

@Output()
addProduct = new EventEmitter();

  constructor() {

   }

   addToCart(){
     this.addProduct.emit({data: this.prodData});
   }

  ngOnInit() {
  }

}


// http://data.fixer.io/api/latest?access_key=8b80c1d364c46119c0849c9605bf142a&format=1
