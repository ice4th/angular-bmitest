import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';
  result = '555';
  submit(weight:any, height:any) {
     alert(weight)
     alert(height)
     const res = weight + height;
     console.log(res);
     
  }

  
}
