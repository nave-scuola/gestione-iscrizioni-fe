import { inject, Injectable } from '@angular/core';
import { StudenteStore } from './studente-store';
import { StudenteRTO } from '../models/studente.model';

@Injectable({
  providedIn: 'root',
})
export class StudenteFacade {
  private store = inject(StudenteStore);

  readonly studenti = this.store.studenti;
  readonly loading = this.store.loading;
  readonly errore = this.store.errore;

  loadAll(): void {
    this.store.loadAll();
  }

  /*
  getById(id: number): StudenteRTO | undefined {
    return this.store.getById(id);
  }
  */

}
