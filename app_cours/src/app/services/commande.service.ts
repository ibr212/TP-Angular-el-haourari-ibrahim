
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../../../Models/commande.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommandeService {
  private apiUrl = 'http://localhost:3000/api/commandes';

  constructor(private http: HttpClient) {}

  getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.apiUrl);
  }
}
