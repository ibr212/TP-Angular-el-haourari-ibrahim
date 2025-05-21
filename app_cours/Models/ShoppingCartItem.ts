import { Product } from "./Product";


export class ShoppingCartItem {
    itemProduct: Product;
    quantity: number;
  
    constructor(product: Product, quantity: number) {
      this.itemProduct = product;
      this.quantity = quantity;
    }
  
    addProduct(shoppingCartItem: ShoppingCartItem){
        if(this.itemProduct.productID == shoppingCartItem.itemProduct.productID){
            this.quantity += shoppingCartItem.quantity;
        }
      
    }
  
    subtractProduct(shoppingCartItem: ShoppingCartItem) {
        if(this.itemProduct.productID == shoppingCartItem.itemProduct.productID){
            this.quantity += shoppingCartItem.quantity;
        }
    }
  
    displayProductItem(): void {
      this.itemProduct.printProduct();
      console.log(`Quantité : ${this.quantity}`);
    }
  }
  