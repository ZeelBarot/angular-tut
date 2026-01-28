import { Component, signal } from '@angular/core';
import { Variables } from './components/variables/variables';


@Component({
  selector: 'app-root',
  imports: [Variables],
  templateUrl: './app.html',   // connects with app.html
  styleUrl: './app.css'
})
export class App {
  protected title = signal("Angular21 Tutorial");
}