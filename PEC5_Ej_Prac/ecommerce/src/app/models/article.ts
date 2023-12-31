export interface Article {
  id: number;
  name: string;
  imageURL: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
  quantitySelected: number;
}
