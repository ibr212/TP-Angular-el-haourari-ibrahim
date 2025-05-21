import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = [
    { name: 'Électronique', image: 'assets/categories/electronique.jpg' },
    { name: 'Vêtements', image: 'vetement.jpg' },
    { name: 'Maison', image: 'assets/categories/maison.jpg' },
  ];

  featuredProducts = [
    { name: 'Casque Bluetooth', price: 49.99, image: 'casque.jpg' },
    { name: 'Montre connectée', price: 89.90, image: 'assets/products/montre.jpg' },
    { name: 'Sweat à capuche', price: 29.95, image: 'assets/products/sweat.jpg' },
  ];

  addToCart(product: any) {
    console.log('Ajouté au panier:', product);
    // Intégrer ici la logique d'ajout au panier
  }
}
