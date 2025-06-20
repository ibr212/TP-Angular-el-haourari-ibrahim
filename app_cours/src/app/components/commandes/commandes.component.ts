// src/app/components/commandes/commandes.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeService } from '../../services/commande.service';
import { Commande } from '../../../../Models/commande.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-commandes',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes: Commande[] = [];

  constructor(private commandeService: CommandeService) {}

  ngOnInit(): void {
    this.commandeService.getCommandes().subscribe(data => {
      this.commandes = data;
    });
  }
}
