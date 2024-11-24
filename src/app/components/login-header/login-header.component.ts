import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-header',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css'] 
})
export class LoginHeaderComponent {

  constructor(private router: Router) {}

  navigateToSignUp() {
    this.router.navigateByUrl("/auth/sign-up");    
  }
}