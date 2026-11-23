import { Routes } from '@angular/router';
import { DepartementList } from './departement-list/departement-list';

export const routes: Routes = [
  { path: 'departements', component: DepartementList },
  { path: '', redirectTo: '/departements', pathMatch: 'full' },
];
