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
    path: 'seller-register',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/sellers/pages/seller-register/seller-register')
            .then(m => m.SellerRegister)
  },

  {
    path: 'seller-profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/sellers/pages/seller-profile/seller-profile')
        .then(m => m.SellerProfile)
  },

  {
    path: 'product-register',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/products/pages/product-register/product-register')
        .then(m => m.ProductRegister)
  },

  {
    path: '**',
    redirectTo: ''
  }
];