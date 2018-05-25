import { Component,Input} from '@angular/core';
import {Product} from './components/product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedCurrency:string=null;

  cartItems: Product[]=[];

  currentCurrency(event){
   // console.log(event);
    this.selectedCurrency=event.data;
  }

  addProductToCart(event){

   const productWithQty= {...event.product, qty:1};

  //  if(this.cartItems.length >0){
  //   if(this.cartItems.filter(x => x.productId == productWithQty.productId)[0])){

  //   }
  //  }
  
  //  this.cartItems.push(productWithQty);

  this.cartItems=[...this.cartItems, productWithQty];
  }

  title = 'app';
}
