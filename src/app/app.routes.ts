import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'studenti', loadChildren: () => import('./features/iscrizioni/iscrizioni.routes').then(m => m.ISCRIZIONI_ROUTES)},
    {path: '', redirectTo: 'studenti', pathMatch: 'full'},
    {path: '**', redirectTo: 'studenti'}
];
