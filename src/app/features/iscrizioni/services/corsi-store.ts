import { Injectable, signal } from '@angular/core';
import { CorsoRTO } from '../models/corso.model';

@Injectable({
  providedIn: 'root',
})
export class CorsiStore {
  private readonly _corsi = signal<CorsoRTO[]>([
    {idCorso: 1, titolo: 'Sviluppo Backend con Java', codiceCorso: 'JAVA-001', livello: 'Intermedio', descrizione: 'Java 17 e Spring Boot', durataOre: 495, categoria: 'Backend'},
    {idCorso: 2, titolo: 'Angular 21 e Signals', codiceCorso: 'ANG-001', livello: 'Avanzato', descrizione: 'Angular 21 e le sue nuove funzioni', durataOre: 220, categoria: 'Frontend'},
    {idCorso: 3, titolo: 'Database relazionali e MySQL', codiceCorso: 'SQL-001', livello: 'Base', descrizione: 'Progettazione di schemi e scrittura di query SQL', durataOre: 80, categoria: 'Database'},
  ]);

  readonly corsi = this._corsi.asReadonly();

  getById(id: number): CorsoRTO | undefined {
    return this._corsi().find(item => item.idCorso === id);
  }


}
