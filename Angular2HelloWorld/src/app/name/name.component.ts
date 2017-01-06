import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `<ul>
  				<li *ngFor="let name of names">Hello {{name}}</li>
  			 </ul>`,
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
	names:string[];
	description:string;
  constructor() {
  	this.names=['Nipun', 'Harsh', 'Ravinder'];
  	this.description="This is a sample description."
  }

  ngOnInit() {
  }

}
