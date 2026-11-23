import { Routes } from '@angular/router';
import { DepartementList } from './departement-list/departement-list';
import { CommuneList } from './commune-list/commune-list';



export const routes: Routes = [
  { path: 'departements', component: DepartementList },
  { path: '', redirectTo: '/departements', pathMatch: 'full' },
  { path: 'departements/:code', component: CommuneList },
];
