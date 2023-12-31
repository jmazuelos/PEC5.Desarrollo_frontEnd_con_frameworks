import { Article } from './article';

export interface ArticleQuantityChange {
  article: Article;
  quantitySelected: number;
}
