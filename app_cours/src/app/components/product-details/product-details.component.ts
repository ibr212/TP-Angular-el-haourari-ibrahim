import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../Models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductDetailsComponent {
  @Input() product: Product | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() ajouterAuPanier = new EventEmitter<Product>();

  close() {
    this.closeModal.emit();
  }
  acheter() {
    if (this.product) {
      this.ajouterAuPanier.emit(this.product);
      this.close(); 
    }
  }
}
