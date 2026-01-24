import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { UsersComponent } from "./components/users/users";

@Component({
  selector: 'app-root',
  imports: [Login, UsersComponent],
  templateUrl: './app.html',   // connects with app.html
  styleUrl: './app.css'
})
export class App {
  name = 'Zeel Barot';
  x = 10;
  y = 20;
  signI = '{{}}';
}
