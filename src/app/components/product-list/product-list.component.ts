import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {Product} from '../product/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  selectedCurrency:string =null;

  productList:Product[] = [];

  @Output()
  addItem=new EventEmitter();


  sendProductToApp (eve){
    console.log("===="+eve.data);
    this.addItem.emit({product : eve.data});

  }
  constructor() { 

    this.productList=[{
      productId:1100,
      productName:'Sony DSLR D5300',
      productImage:'http://product-image.bdstall.com/big_14734.jpg',
      productCost:50000,
      productStock:true
    },
    {
      productId:1101,
      productName:'Sony DSLR D5400',
      productImage:'http://product-image.bdstall.com/big_14734.jpg',
      productCost:55000,
      productStock:false
    },
    {
      productId:1102,
      productName:'Sony DSLR D5200',
      productImage:'http://product-image.bdstall.com/big_14734.jpg',
      productCost:60000,
      productStock:true
    },{
      productId:1103,
      productName:'Canon DSLR XYZ',
      productImage:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5792/5792700_sd.jpg',
      productCost:64000,
      productStock:false
    },
    {
      productId:1104,
      productName:'Canon DSLR yyy',
      productImage:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5792/5792700_sd.jpg',
      productCost:70000,
      productStock:true
    },
    {
      productId:1105,
      productName:'Canon DSLR rrr',
      productImage:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5792/5792700_sd.jpg',
      productCost:74000,
      productStock:true
    }
  ]

  }

  ngOnInit() {
  }

}
