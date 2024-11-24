import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  successMsg: string | undefined;
  errorMsg: string | undefined;
  msg: string | undefined; 

  constructor(private authService: AuthService, private router: Router, private actRoute: ActivatedRoute) {
    this.actRoute.queryParams.subscribe(p => {
      this.msg = p['msg'];
    });
  }

  onLogin() {
    this.authService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (data) => {
        let token = data.token;
        this.authService.getUserDetails(token).subscribe({
          next: (data) => {
            localStorage.setItem('token', token);
            localStorage.setItem('username', data.username);
            localStorage.setItem('name', data.name);
            let role = data.role;
            switch (role) {
              case 'LAB_OPERATOR':
                this.router.navigateByUrl("/laboperator");
                break;
              case 'EXECUTIVE':
                this.router.navigateByUrl("/executive");
                break;
              case 'ADMIN':
                this.router.navigateByUrl("/admin");
                break;
              default:
                this.router.navigateByUrl("/broken-link");
                break;
            }
          },
          error: (err) => {
            this.errorMsg = err.error.msg;
          }
        });
      },
      error: (err) => {
        this.errorMsg = err.error.msg;
      }
    });
  }
}