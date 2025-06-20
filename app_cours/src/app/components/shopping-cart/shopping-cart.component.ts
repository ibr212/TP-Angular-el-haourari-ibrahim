import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'; // adapte le chemin selon ton projet
import { ShoppingCartItem } from '../../../../Models/ShoppingCartItem';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../../../Models/Product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  imports: [CommonModule],
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: ShoppingCartItem[] = [];

  constructor(
  private productService: ProductService,
  private router: Router
) {}
  ngOnInit(): void {
    this.productService.getCart().subscribe({
      next: (data) => {
        
        this.cartItems = data.map((item: any) => 
          new ShoppingCartItem(
            new Product(
              item.itemProduct.productID,
              item.itemProduct.productTitle,
              item.itemProduct.productPrice,
              item.itemProduct.category,
              item.itemProduct.quantity,
              item.itemProduct.productImage
              
              
            ),
            item.quantity
          )
        );
      },
      error: (err) => console.error('Erreur lors du chargement du panier', err)
    });
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.itemProduct.productPrice * item.quantity, 0);
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  clearCart(): void {
    this.cartItems = [];
  }
  goToCatalog(): void {
  this.router.navigate(['/catalog']);
}

}
