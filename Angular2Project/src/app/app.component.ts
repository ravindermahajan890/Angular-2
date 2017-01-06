import { Component } from '@angular/core';
import { Article } from './article/article.component';
import { ArticleService } from './article.service';

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
  constructor(articleService: ArticleService) {
  	this.articles = articleService.getArticles();
  }
  addArticle(title:HTMLInputElement, link:HTMLInputElement):void{
  	this.articles.push(new Article(title.value, link.value));
  }

  sortedArticles(){
  	return this.articles.sort((a:Article, b:Article)=> {
  		return a.votes - b.votes
  	})
  }
}