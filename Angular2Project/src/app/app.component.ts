import { Component } from '@angular/core';
import { Article } from './article/article.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
  	class: 'row'
  }
})
export class AppComponent {
  articles: Article[];
  constructor() {
  	this.articles = [ 
  		new Article('Angular 2', 'http://angular.io', 3),
  		new Article('Fullstack', 'http://fullstack.io', 4),
  		new Article('NodeJS', 'http://nodejs.org', 5)
  	]
  }
  addArticle(title:HTMLInputElement, link:HTMLInputElement):void{
  	this.articles.push(new Article(title.value, link.value));
  }
}