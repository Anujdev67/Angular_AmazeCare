import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LaboperatorComponent } from './pages/laboperator/laboperator.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/auth/login', pathMatch: 'full'
  },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignupComponent }
    ]
  },
  { path: 'laboperator', component: LaboperatorComponent },
  { path: '**', component: PageNotFoundComponent }
];