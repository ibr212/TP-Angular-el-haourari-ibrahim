/*import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../Models/Product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../app/services/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  imports: [CommonModule,ProductDetailsComponent],
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  isLoading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getAvailableProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
        console.log(this.products);
      },
      error: (error) => {
        console.error('Error loading products', error);
        this.isLoading = false;
      }
    });
    
  }

  showDetails(product: Product): void {
    this.selectedProduct = product;
  }
  
}*/
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Product } from '../../../../Models/Product';
import { ShoppingCartItem } from '../../../../Models/ShoppingCartItem';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  standalone: true,
  styleUrls: ['./catalog.component.css'],
  imports: [CommonModule,FormsModule,MatIconModule, ProductDetailsComponent],
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  cartItems: ShoppingCartItem[] = [];
  isLoading = true;
  searchQuery = '';
selectedCategory: string = 'all';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Récupère la liste des produits du catalogue
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log("Produits charges :", this.products);
    });

    // Synchronise avec le panier existant
    this.productService.getCart().subscribe(data => {
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
      console.log("Panier charge :", this.cartItems);
      this.isLoading = false;
    });
  }

  showDetails(product: Product): void {
    this.selectedProduct = product;
  }

  ajouterProduitAuPanier(product: Product): void {
    const index = this.cartItems.findIndex(
      item => item.itemProduct.productID === product.productID
    );

    if (index !== -1) {
      this.cartItems[index].quantity += 1;
    } else {
      this.cartItems.push(new ShoppingCartItem(product, 1));
    }

    this.productService.updateCart(this.cartItems).subscribe(() => {
      console.log('Produit ajouté et panier mis à jour');
    });

    this.selectedProduct = null;
  }
  filteredProducts(): Product[] {
  return this.products.filter(product => {
    const matchCategory = this.selectedCategory === 'all' || product.category === this.selectedCategory;
    const matchTitle = product.productTitle.toLowerCase().includes(this.searchQuery.toLowerCase());
    return matchCategory && matchTitle;
  });
}
filterCategory(category: string): void {
  this.selectedCategory = category;
}
isActive(category: string): boolean {
  return this.selectedCategory === category;
}
}



