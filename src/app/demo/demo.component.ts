import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  demoData ='test';
  demoData2=1234;
  constructor() { }

  ngOnInit() {
  }

  showAlert(){
    alert('Hello Bhaiya');
  }

}
