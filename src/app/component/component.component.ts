import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  display(name:String)   //function to display the name in console
  {
    console.log("Name  :  "+name)
  }
}
