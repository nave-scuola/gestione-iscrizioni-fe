import { Component, computed, inject, input } from '@angular/core';
import { StudenteFacade } from '../../services/studente-facade';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dettaglio-studente',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dettaglio-studente.html',
  styleUrl: './dettaglio-studente.css',
})
export class DettaglioStudente {
  id = input.required<string>();

  private facade = inject(StudenteFacade);

  //readonly studente = computed(() => this.facade.getById(Number(this.id())));
}
