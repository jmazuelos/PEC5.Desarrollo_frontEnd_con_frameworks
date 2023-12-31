import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})

export class ArticleItemComponent {
  @Input() article: Article = {
    id: 1,
    name: 'Silla ergonómica',
    imageURL: '../assets/images/sillaErgonomica.JPG',
    price: 105,
    isOnSale: true,
    quantityInCart: 2,
    quantitySelected: 0
  };

  articleClasses =  {
    "notOnSale": !this.article.isOnSale
  };

  incrementQuantity() {
    if(this.article.quantitySelected < this.article.quantityInCart){
      this.article.quantitySelected++;
    }
  }

  decrementQuantity() {
    if(this.article.quantitySelected > 0) {
      this.article.quantitySelected--;
    }
  }
}
