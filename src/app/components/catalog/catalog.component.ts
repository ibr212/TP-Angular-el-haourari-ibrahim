import { Component, OnInit } from '@angular/core';
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
  
}


