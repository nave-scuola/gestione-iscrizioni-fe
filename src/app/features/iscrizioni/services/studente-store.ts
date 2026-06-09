import { inject, Injectable, signal } from '@angular/core';
import { StudenteRTO } from '../models/studente.model';
import { StudenteApi } from './studente.api';

@Injectable({
  providedIn: 'root',
})
export class StudenteStore {

  private api = inject(StudenteApi);

  private readonly _studenti = signal<StudenteRTO[]>([]);
  readonly studenti = this._studenti.asReadonly();

  private readonly _loading = signal(false);
  readonly loading = this._loading.asReadonly();

  private readonly _errore = signal<string | null>(null);
  readonly errore = this._errore.asReadonly();

  loadAll(): void {
    this._loading.set(true);
    this._errore.set(null);
    this.api.getAll().subscribe({
      next: items => {this._studenti.set(items); this._loading.set(false);},
      error: () => {this._errore.set('Errore nel caricamento'); this._loading.set(false);}
    });
  }
  
  /*
  private readonly _studenti = signal<StudenteRTO[]>([
    {idStudente: 1, nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@email.it', citta: 'Napoli', cf: 'MRGSFE85D67V480F', codiceStudente: 'STU-001'},
    {idStudente: 2, nome: 'Luigi', cognome: 'Verdi', email: 'luigi.verdi@email.it', citta: 'Milano', cf: 'LGVRDE85D67U789G', codiceStudente: 'STU-002'},
    {idStudente: 3, nome: 'Laura', cognome: 'Neri', email: 'laura.neri@email.it', citta: 'Molise', cf: 'LRNRIE89F67V998V', codiceStudente: 'STU-003'},
    {idStudente: 4, nome: 'Marco', cognome: 'Marconi', email: 'marco.marconi@email.it', citta: 'Torino', cf: 'MMRNIE89G67V788T', codiceStudente: 'STU-004'},
    {idStudente: 5, nome: 'Sofia', cognome: 'Amadori', email: 'sofia.amadori@email.it', citta: 'Palermo', cf: 'SFMRIE89F67V028R', codiceStudente: 'STU-005'},
    {idStudente: 6, nome: 'Pietro', cognome: 'Smusi', email: 'pietro.smusi@email.it', citta: 'Sassari', cf: 'PTRSMI44F67V994G', codiceStudente: 'STU-006'},
  ]);

  readonly studenti = this._studenti.asReadonly();

  getById(id: number): StudenteRTO | undefined {
    return this._studenti().find(item => item.idStudente === id);
  }
  */

}
