import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './login/login.component';
import { CommandesComponent } from './components/commandes/commandes.component';
export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch:'full'
    },
    {
        path:'catalog',
        component:CatalogComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'panier',
        component:ShoppingCartComponent
    },
     { path: 'login', component: LoginComponent },
  // autres routes
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'commandes', component: CommandesComponent },

];
