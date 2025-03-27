import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule,RouterOutlet],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  tasks = [
    "Install Angular CLI",
    "Create new app",
    "Serve app",
    "Develop app",
    "Deploy app"
  ]
}
