import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { Router  } from '@angular/router';  
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.Component.html',
  standalone: true,
  styleUrl: 'toolbar.Component.css',
  imports: [MatToolbarModule,CommonModule,MatCardModule, MatButtonModule, MatIconModule, RouterModule],
})
export class ToolbarOverviewExample implements OnInit{
    currentUser: any = null;
  showDetails = false;

  ngOnInit(): void {
    const userData = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (userData) {
      this.currentUser = JSON.parse(userData);
    }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
constructor(private router: Router) {}
logout(): void {
  localStorage.removeItem('currentUser');
  sessionStorage.removeItem('currentUser');
  this.router.navigate(['/login']);
}


}