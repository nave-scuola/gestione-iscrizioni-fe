import { Component, inject } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { CorsiStore } from '../../services/corsi-store';
import { CorsoRTO } from '../../models/corso.model';

@Component({
  selector: 'app-lista-corsi',
  standalone: true,
  imports: [Card],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})
export class ListaCorsi {
  private store = inject(CorsiStore);

  readonly corsi = this.store.corsi;

  onCorsoClick(item: CorsoRTO): void {
    console.log("Selezionato: ", item);
  }

}
