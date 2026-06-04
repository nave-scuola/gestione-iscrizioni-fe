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
    {idCorso: 4, titolo: 'Sviluppo Backend con Pyhton', codiceCorso: 'PHY-001', livello: 'Avanzato', descrizione: 'Machine Learning con Python', durataOre: 600, categoria: 'Backend'},
    {idCorso: 5, titolo: 'Aggiornamento su Bootstrap 5', codiceCorso: 'BTR-001', livello: 'Base', descrizione: 'Novità introdotte con Bootstrap 5', durataOre: 56, categoria: 'Frontend'},
    {idCorso: 6, titolo: 'Corso completo su MongoDB', codiceCorso: 'MDB-001', livello: 'Intermedio', descrizione: 'Corso per ottenere certificazione MongoDB', durataOre: 90, categoria: 'Database'}
  ]);

  readonly corsi = this._corsi.asReadonly();

  getById(id: number): CorsoRTO | undefined {
    return this._corsi().find(item => item.idCorso === id);
  }


}
