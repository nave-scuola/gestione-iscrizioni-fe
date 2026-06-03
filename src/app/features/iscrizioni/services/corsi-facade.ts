import { inject, Injectable } from '@angular/core';
import { CorsiStore } from './corsi-store';
import { CorsoRTO } from '../models/corso.model';

@Injectable({
  providedIn: 'root',
})
export class CorsiFacade {
  private store = inject(CorsiStore);

  readonly corsi = this.store.corsi;

  getById(id: number): CorsoRTO | undefined {
    return this.store.getById(id);
  }

}
