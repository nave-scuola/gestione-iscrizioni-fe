import { Injectable, signal } from '@angular/core';
import { StudenteRTO } from '../models/studente.model';

@Injectable({
  providedIn: 'root',
})
export class StudenteStore {
  private readonly _studenti = signal<StudenteRTO[]>([
    {idStudente: 1, nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@email.it', citta: 'Napoli', cf: 'MRGSFE85D67V480F', codiceStudente: 'STU-001'},
    {idStudente: 2, nome: 'Luigi', cognome: 'Verdi', email: 'luigi.verdi@email.it', citta: 'Milano', cf: 'LGVRDE85D67U789G', codiceStudente: 'STU-002'},
    {idStudente: 3, nome: 'Laura', cognome: 'Neri', email: 'laura.neri@email.it', citta: 'Molise', cf: 'LRNRIE89F67V998V', codiceStudente: 'STU-003'},
  ]);

  readonly studenti = this._studenti.asReadonly();

  getById(id: number): StudenteRTO | undefined {
    return this._studenti().find(item => item.idStudente === id);
  }


}
