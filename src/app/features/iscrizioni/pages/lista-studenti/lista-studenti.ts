import { Component } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';

@Component({
  selector: 'app-lista-studenti',
  standalone: true,
  imports: [Card],
  templateUrl: './lista-studenti.html',
  styleUrl: './lista-studenti.css',
})
export class ListaStudenti {
  titolo = 'Gestione Iscrizioni';
}
