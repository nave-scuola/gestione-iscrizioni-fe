import { Component, computed, inject, signal } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { StudenteRTO } from '../../models/studente.model';
import { StudenteStore } from '../../services/studente-store';

@Component({
  selector: 'app-lista-studenti',
  standalone: true,
  imports: [Card],
  templateUrl: './lista-studenti.html',
  styleUrl: './lista-studenti.css',
})
export class ListaStudenti {

  private store = inject(StudenteStore);
  
  readonly studenti = this.store.studenti;

  readonly filtroTesto = signal('');

  readonly studentiFiltrati = computed(() => {
    const filtro = this.filtroTesto().toLowerCase().trim();

    if(!filtro) return this.studenti();

    return this.studenti().filter(item => {
      // Filtra tenendo conto sia del nome che del cognome, con l'operatore || mi faceva cercare solo nome o cognome
      const nomeCompleto = `${item.nome} ${item.cognome}`.toLowerCase();
      // Controlla se il nominativo inserito è contenuto (per questo .includes())
      return nomeCompleto.includes(filtro);
    });

  });

  onCardClick(item: StudenteRTO): void {
    console.log("Selezionato: ", item);
  }

}
