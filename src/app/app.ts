import { Component, signal } from '@angular/core';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';


@Component({
  selector: 'app-root',
  imports: [DataBinding],
  templateUrl: './app.html',   // connects with app.html
  styleUrl: './app.css'
})
export class App {
  protected title = signal("Angular21 Tutorial");
}