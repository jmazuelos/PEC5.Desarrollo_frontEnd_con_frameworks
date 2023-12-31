import { Component, Input } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleQuantityChange } from '../../models/article-quantity-change';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})

export class ArticleListComponent {
  articles: Array<Article> = [{
    id: 1,
    name: 'Silla ergonómica 1',
    imageURL: '../assets/images/sillaErgonomica1.JPG',
    price: 105,
    isOnSale: true,
    quantityInCart: 2,
    quantitySelected: 0
  }, {
    id: 2,
    name: 'Silla ergonómica 2',
    imageURL: '../assets/images/sillaErgonomica2.JPG',
    price: 150,
    isOnSale: false,
    quantityInCart: 4,
    quantitySelected: 0
  }, {
    id: 3,
    name: 'Silla ergonómica 3',
    imageURL: '../assets/images/sillaErgonomica3.JPG',
    price: 180,
    isOnSale: true,
    quantityInCart: 3,
    quantitySelected: 0
  }];

  incrementQuantity(index) {
    if(this.articles[index].quantitySelected < this.articles[index].quantityInCart){
      this.articles[index].quantitySelected++;
    }
  }

  decrementQuantity(index) {
    if(this.articles[index].quantitySelected > 0) {
      this.articles[index].quantitySelected--;
    }
  }

}
