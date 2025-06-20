export interface ItemProduct {
  productID: string;
  productTitle: string;
  productImage: string;
  category: string;
  productPrice: number;
  quantity: number;
}

export class Commande {
  id!: number;
  date!: string;
  statut!: string;
  items!: {
    itemProduct: {
      productID: string;
      productTitle: string;
      productImage: string;
      category: string;
      productPrice: number;
      quantity: number;
    };
    quantity: number;
  }[];
}
