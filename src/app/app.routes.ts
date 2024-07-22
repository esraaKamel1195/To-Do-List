import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./users-list/users-list.component').then(
        (c) => c.UsersListComponent
      ),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./users-list/users-list.component').then(
        (c) => c.UsersListComponent
      ),
  },
  {
    path: 'user-details/:id',
    loadComponent: () =>
      import('./user-details/user-details.component').then(
        (c) => c.UserDetailsComponent
      ),
  },
];
