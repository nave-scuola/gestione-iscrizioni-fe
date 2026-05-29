import { Component, computed, signal } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { StudenteRTO } from '../../models/studente.model';

@Component({
  selector: 'app-lista-studenti',
  standalone: true,
  imports: [Card],
  templateUrl: './lista-studenti.html',
  styleUrl: './lista-studenti.css',
})
export class ListaStudenti {
  titolo = 'Gestione Iscrizioni';

  readonly studenti = signal<StudenteRTO[]>([
    {idStudente: 1, nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@email.it', citta: 'Napoli', cf: 'MRGSFE85D67V480F', codiceStudente: 'STU-001'},
    {idStudente: 2, nome: 'Luigi', cognome: 'Verdi', email: 'luigi.verdi@email.it', citta: 'Milano', cf: 'LGVRDE85D67U789G', codiceStudente: 'STU-002'},
    {idStudente: 3, nome: 'Laura', cognome: 'Neri', email: 'laura.neri@email.it', citta: 'Molise', cf: 'LRNRIE89F67V998V', codiceStudente: 'STU-003'},
  ]);

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
