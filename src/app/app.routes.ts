import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home/home')
        .then(m => m.Home)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login')
        .then(m => m.Login)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/pages/register/register')
        .then(m => m.Register)
  },

  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
        import('./features/users/pages/profile/profile')
            .then(m => m.Profile)
  },

  {
    path: '**',
    redirectTo: ''
  }
];