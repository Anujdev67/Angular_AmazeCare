import { Component } from '@angular/core';
import { LoginHeaderComponent } from '../../components/login-header/login-header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginHeaderComponent, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent { }