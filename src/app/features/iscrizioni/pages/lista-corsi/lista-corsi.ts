import { Component, inject } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { CorsiStore } from '../../services/corsi-store';
import { CorsoRTO } from '../../models/corso.model';
import { CorsiFacade } from '../../services/corsi-facade';

@Component({
  selector: 'app-lista-corsi',
  standalone: true,
  imports: [Card],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})
export class ListaCorsi {
  private facade = inject(CorsiFacade);

  readonly corsi = this.facade.corsi;

  onCorsoClick(item: CorsoRTO): void {
    console.log("Selezionato: ", item);
  }

}
