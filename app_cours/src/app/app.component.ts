import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { MasterComponent } from './components/master/master.component';
import { UsersComponent } from "./components/users/users.component";
import { CatalogComponent } from './components/catalog/catalog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarOverviewExample } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { CommandesComponent } from '../app/components/commandes/commandes.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ReactiveFormsModule, CommandesComponent, MasterComponent,MatSnackBarModule, ShoppingCartComponent, UsersComponent, ToolbarOverviewExample,MatToolbarModule, CatalogComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
   showToolbar = true;
  
  constructor(public router: Router) { 
    // Log initial
    console.log('Initial URL:', this.router.url);
    console.log('Initial showToolbar:', this.showToolbar);
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('Navigation ended at:', event.urlAfterRedirects);
        this.showToolbar = event.urlAfterRedirects !== '/login';
        console.log('showToolbar after navigation:', this.showToolbar);
      });
  

    }
}
