import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
 
  Sum:any
  Height:any
  Weight:any
  
  
  Showconsole(){
    this.Sum=((this.Weight)/(this.Height * this.Height)).toFixed(2);
    console.log('BMI : ',this.Sum);

   
  }
}
