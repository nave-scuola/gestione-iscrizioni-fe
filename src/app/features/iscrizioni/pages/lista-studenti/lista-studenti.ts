import { Component } from '@angular/core';
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

  readonly studenti: StudenteRTO[] = [
    {idStudente: 1, nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@email.it', citta: 'Napoli', cf: 'MRGSFE85D67V480F', codiceStudente: 'STU-001'},
    {idStudente: 2, nome: 'Luigi', cognome: 'Verdi', email: 'luigi.verdi@email.it', citta: 'Milano', cf: 'LGVRDE85D67U789G', codiceStudente: 'STU-002'},
    {idStudente: 3, nome: 'Laura', cognome: 'Neri', email: 'laura.neri@email.it', citta: 'Molise', cf: 'LRNRIE89F67V998V', codiceStudente: 'STU-003'},
  ]
}
