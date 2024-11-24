import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginHeaderComponent } from "./components/login-header/login-header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginHeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AmazeCare';
}