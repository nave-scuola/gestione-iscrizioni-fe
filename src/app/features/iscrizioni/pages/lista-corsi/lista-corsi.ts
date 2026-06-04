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

  getImmaginiCorso(codiceCorso: string): string {
    // Record per creare una mappa chiave-valore (come un dizionario o una rubrica)
    //                   Record<TipoDellaChiave, TipoDelValore>
    // In questo caso: sto creando un oggetto dove la chiave è una stringa (codiceCorso) e 
    //il valore associato è un'altra stringa (il percorso dell'immagine)
    const elencoImmagini: Record<string, string> = {
      'JAVA-001': 'java-icon.jpg',
      'ANG-001': 'angular-logo.png',
      'SQL-001': 'mysql-logo.jpg',
      'PHY-001': 'python-logo.jpg',
      'BTR-001': 'bootstrap-logo.jpg',
      'MDB-001': 'mongodb-logo.jpg'
    };

    return elencoImmagini[codiceCorso];
  }

}
