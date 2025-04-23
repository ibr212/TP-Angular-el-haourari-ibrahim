import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.Component.html',
  styleUrl: 'toolbar.Component.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class ToolbarOverviewExample {}