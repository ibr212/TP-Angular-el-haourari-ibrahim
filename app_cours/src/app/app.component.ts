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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, MasterComponent, UsersComponent, ToolbarOverviewExample,MatToolbarModule, CatalogComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Master Devops et Cloud Computing !';

  welcome() : void {
    alert(this.title + ",Bienvenue parmi nous !");
  }
}
