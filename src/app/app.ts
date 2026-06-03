import { Component } from '@angular/core';
import { Card } from './shared/components/card/card';
import { ListaStudenti } from "./features/iscrizioni/pages/lista-studenti/lista-studenti";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Card, ListaStudenti],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Gestione Iscrizioni';

  corsi = [
    {id: 1, titolo: 'Corso Angular', descrizione: 'Corso per test', image: 'https://js.devexpress.com/Content/Images/Frameworks/Angular.png'},
    {id: 2, titolo: 'Corso Java', descrizione: 'Corso per test', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnM3JO-10pqUHbWWP5tuOo-9LKUZhogZEEww&s'},
    {id: 3, titolo: 'Corso HTML', descrizione: 'Corso per test', image: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
  ];

  onCorsoClick(id: number): void {
    // Uso il metodo .find() per cercare un corso specifico nell'array
    // Il risultato, ovvero tutte le informazioni del corso, vengono salvate in corsoSelezionato 
    const corsoSelezionato = this.corsi.find(c => c.id === id);

    console.log("Selezionato: ", corsoSelezionato);
  }

  
}
