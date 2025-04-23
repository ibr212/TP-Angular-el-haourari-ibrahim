import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { MasterComponent } from './components/master/master.component';
import { UsersComponent } from "./components/users/users.component";
import { CatalogComponent } from './components/catalog/catalog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarOverviewExample } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterComponent, UsersComponent, ToolbarOverviewExample,MatToolbarModule, CatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Master Devops et Cloud Computing !';

  welcome() : void {
    alert(this.title + ",Bienvenue parmi nous !");
  }
}
