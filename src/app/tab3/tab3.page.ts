import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  
  constructor() {}
  
  isInputEnabledButton1:boolean = false;
  isInputEnabledButton2:boolean = false;
  isInputEnabledButton3:boolean = false;
  NameAndSurename:string=''
  Age:any
  Gender:string=''
  Height:Number=0
  Weight:Number=0
  Color:string=''
  Food:string=''
  instagram:string =''
  Facebook:string =''
  Line:string=''


  
  Showconsole(){
    console.log('Name : ',this.NameAndSurename);
    console.log('Age : ',this.Age);
    console.log('Gender : ',this.Gender);
    console.log('Height : ',this.Height);
    console.log('Weight : ',this.Weight);
    console.log('Color',this.Color);
    console.log('Food',this.Food);
    console.log('Instargram:',this.instagram);
    console.log('Facebook',this.Facebook);
    console.log('Line',this.Line);


  }





}
