import { Component, computed, inject, signal } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { StudenteRTO } from '../../models/studente.model';
import { StudenteFacade } from '../../services/studente-facade';
import { Router } from '@angular/router';
import { ListaCorsi } from '../lista-corsi/lista-corsi';
import { FiltroStudenti } from "../../components/filtro-studenti/filtro-studenti";

@Component({
  selector: 'app-lista-studenti',
  standalone: true,
  imports: [Card, ListaCorsi, FiltroStudenti],
  templateUrl: './lista-studenti.html',
  styleUrl: './lista-studenti.css',
})
export class ListaStudenti {
  private facade = inject(StudenteFacade);
  private router = inject(Router);

  readonly studenti = this.facade.studenti;

  readonly filtroCampi = signal({nome: '', cognome: ''});

  readonly studentiFiltrati = computed(() => {
    const{nome, cognome} = this.filtroCampi();

    const filtroNome = nome.toLowerCase().trim();
    const filtroCognome = cognome.toLowerCase().trim();

    if(!filtroNome && !filtroCognome) {
      return this.studenti();
    }

    return this.studenti().filter(item => {
      const nomeTrovato = !filtroNome || item.nome.toLowerCase().includes(filtroNome);
      const cognomeTrovato = !filtroCognome || item.cognome.toLowerCase().includes(filtroCognome);

      return nomeTrovato && cognomeTrovato;
    })
  });

  // Funzione chiamata dall'HTML quando il componente Filtro lancia l'evento (filtroApplicato) da filtro-studenti.ts
  // Riceve l'oggetto event (con nome e cognome) e lo invia dentro al Signal
  onFiltroApplicato(event: {nome: string, cognome: string}): void {
    this.filtroCampi.set(event);
  }

  onCardClick(item: StudenteRTO): void {
    console.log("Selezionato: ", item);
  }

  goToDettaglio(idStudente: number): void {
    this.router.navigate(['/studenti', idStudente]);
  }

}
