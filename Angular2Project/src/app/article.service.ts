import { Injectable } from '@angular/core';
import { Article } from './article/article.component';

@Injectable()
export class ArticleService {
	articles: Article[]
  constructor() { 
  	this.articles = [ 
  		new Article('Angular 2', 'http://angular.io', 1),
  		new Article('Fullstack', 'http://fullstack.io', 2),
  		new Article('NodeJS', 'http://nodejs.org', 3)
  	]
  }

  getArticles(){
  	return this.articles;
  }
}
