import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',   // connects with app.html
  styleUrl: './app.css'
})
export class App {
  name = 'Zeel Barot';
  x = 10;
  y = 20;
  signI = '{{}}';
}
