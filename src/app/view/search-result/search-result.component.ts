import {Component, OnInit} from '@angular/core';
import {Card} from '../../model/Card';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit{

  cards: Card[] = [];
  cardLength: number = 0;

  constructor() { }


  ngOnInit(): void {
    this.cards.push({title: 'Madolduwa', subtitle: 'Martin wickramasinghe', text: 'This is a sample test',image:'https://material.angular.io/assets/img/examples/shiba1.jpg'});
    this.cards.push({title: 'Gamperaliya', subtitle: 'Martin wickramasinghe', text: 'This is a sample test',image:'https://post.healthline.com/wp-content/uploads/2020/08/edible-flowers-732x549-thumbnail.jpg'});
    this.cards.push({title: 'Yuganthaya', subtitle: 'Martin wickramasinghe', text: 'This is a sample test', image:'https://material.angular.io/assets/img/examples/shiba1.jpg'});
    this.cards.push({title: 'Kaliyugaya', subtitle: 'Martin wickramasinghe', text: 'This is a sample test', image:'https://material.angular.io/assets/img/examples/shiba1.jpg'});
    this.cards.push({title: 'Kaliyugaya', subtitle: 'Martin wickramasinghe', text: 'This is a sample test', image:'https://material.angular.io/assets/img/examples/shiba1.jpg'});
    this.cards.push({title: 'Kaliyugaya', subtitle: 'Martin wickramasinghe', text: 'This is a sample test', image:'https://material.angular.io/assets/img/examples/shiba1.jpg'});
    this.cards.push({title: 'Kaliyugaya', subtitle: 'Martin wickramasinghe', text: 'This is a sample test', image:'https://material.angular.io/assets/img/examples/shiba1.jpg'});
    this.cards.push({title: 'Kaliyugaya', subtitle: 'Martin wickramasinghe', text: 'This is a sample test', image:'https://material.angular.io/assets/img/examples/shiba1.jpg'});
    this.cards.push({title: 'Kaliyugayaaaaaaaaaaaaaaaaaaaaaaaaaaa', subtitle: 'Martin wickramasinghe', text: 'This is a sample test', image:'https://material.angular.io/assets/img/examples/shiba1.jpg'});

    this.cardLength = this.cards.length;
  }

}

