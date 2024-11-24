import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, NgIf], // Ensure FormsModule and NgIf are imported here
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = "";
  username: string = "";
  password: string = "";
  errorMsg: string | undefined;
  successMsg: string | undefined;

  constructor(private authService: AuthService) {}

  onSignUp() {
    this.authService.signUp({
      name: this.name,
      username: this.username,
      password: this.password
    }).subscribe({
      next: (data) => {
        this.successMsg = 'Sign Up Success, Please login';
      },
      error: (err) => {
        console.log(err);
        this.errorMsg = err.msg;
      }
    });
  }
}