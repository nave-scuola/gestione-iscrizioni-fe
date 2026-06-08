import { Routes } from "@angular/router";

export const ISCRIZIONI_ROUTES: Routes = [
    {path: '', loadComponent: () => import('./pages/lista-studenti/lista-studenti').then(m => m.ListaStudenti)},
    {path: ':id', loadComponent: () => import('./pages/dettaglio-studente/dettaglio-studente').then(m => m.DettaglioStudente)},
];