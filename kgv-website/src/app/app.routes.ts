import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./sites/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'ankuendigungen',
    loadComponent: () => import('./sites/updates/updates.page').then(m => m.UpdatesPage)
  },
  {
    path: 'arbeitsstunden',
    loadComponent: () => import('./sites/arbeitsstunden/arbeitsstunden.page').then(m => m.ArbeitsstundenPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
