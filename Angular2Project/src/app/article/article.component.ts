import { Component, OnInit, Input } from '@angular/core';

export interface votes{
	increaseVote: Function;
	decreaseVote: Function;
}

export class Article implements votes{
	title:string;
	link:string;
	votes:number;
	constructor(title: string, link:  string, votes?: number){
	  	this.title = title;
	  	this.link = link;
	  	this.votes = votes || 0;
	}
	increaseVote = () => {
		this.votes += 1;
	}

	decreaseVote = () => {
		this.votes -= 1;
	}
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  constructor() {
  }

  voteDown(){
  	this.article.decreaseVote();
  }

  voteUp(){
  	this.article.increaseVote();
  }

  ngOnInit() {
  }
}
