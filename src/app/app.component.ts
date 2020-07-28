import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  result = null;
  submit(weight:any, height:any) {
    if ((weight<=0 || weight >= 300) || (height<=0 || height >= 3))
    {
      alert("Your weight or height are out of range.")
      
    }
    else 
     var res = +weight / (+height*height) ;
     this.result= res.toFixed(2);;
     console.log(res);
     
  }
  
}
export class NGIF {
  submit: boolean= true;
  }
