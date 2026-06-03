import { Component } from '@angular/core';
import { ListaStudenti } from "./features/iscrizioni/pages/lista-studenti/lista-studenti";
import { ListaCorsi } from './features/iscrizioni/pages/lista-corsi/lista-corsi';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaStudenti, ListaCorsi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Gestione Iscrizioni';

}
