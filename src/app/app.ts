import { Component, signal } from '@angular/core';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',   // connects with app.html
  styleUrl: './app.css'
})
export class App {
  protected title = signal("Angular21 Tutorial");
  protected currentRoute = signal('');

  constructor() {
    // This will be updated  by routerLinkActive
  }
}