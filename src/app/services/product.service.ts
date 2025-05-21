/*import { Injectable } from '@angular/core';
import { Product } from '../../../Models/Product';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockProducts: Product[] = [
    new Product(1, 'Laptop', 'Ordinateur portable haute performance', 999.99, 15, 'laptop.jpg'),
    new Product(2, 'Smartphone', 'Téléphone intelligent dernier cri', 699.99, 5, 'phone.jpg'),
    new Product(3, 'Casque', 'Casque audio sans fil', 199.99, 0, 'headphones.jpg'),
    new Product(4, 'Souris', 'Souris sans fil ergonomique', 49.99, 8, 'mouse.jpg'),
    new Product(5, 'Clavier', 'Clavier mécanique RGB', 89.99, 12, 'keyboard.jpg'),
    new Product(6, 'Smart tv', 'smart tv 50 pouces 4K', 399.99, 3, 'tv.jpg')
  ];

  constructor() { }

  // Méthode pour récupérer tous les produits (simule un appel API)
  getProducts(): Observable<Product[]> {
    // Simule un délai réseau avec delay
    return of(this.mockProducts).pipe(delay(500));
  }

  // Méthode pour récupérer un produit par son ID (simule un appel API)
  getProductById(id: number): Observable<Product | undefined> {
    const product = this.mockProducts.find(p => p.id === id);
    return of(product).pipe(delay(500));
  }

  // Méthode pour récupérer seulement les produits disponibles (quantité > 0)
  getAvailableProducts(): Observable<Product[]> {
    const availableProducts = this.mockProducts.filter(p => p.quantity > 0);
    return of(availableProducts).pipe(delay(500));
  }
}*/


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api'; // URL de ton backend Express

  constructor(private http: HttpClient) {}

  // Obtenir la liste des produits
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  // Obtenir le panier actuel
  getCart(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cart`);
  }

  // Mettre à jour le panier
  updateCart(cart: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/cart`, cart);
  }
}
