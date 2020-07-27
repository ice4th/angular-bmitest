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
     alert(weight)
     alert(height)
     const res = weight + height;
     this.result= res;
     console.log(res);
     
  }

  
}
