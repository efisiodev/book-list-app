import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: ()=> import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'cart',
    loadComponent: ()=> import('./pages/cart/cart.component').then(c => c.CartComponent)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
