import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scenario1';
  constructor(){}

  display(name:String)
  {
    console.log("Name  :  "+name)
  }
}
