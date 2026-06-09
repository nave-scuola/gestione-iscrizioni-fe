import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-studenti',
  imports: [ReactiveFormsModule],
  templateUrl: './filtro-studenti.html',
  styleUrl: './filtro-studenti.css',
})
export class FiltroStudenti {
  private fb = inject(FormBuilder);

  filtroApplicato = output<{nome: string, cognome: string}>();

  filtroForm = this.fb.nonNullable.group({
    nome: [''],
    cognome: [''],
  });

  onSubmit(): void {
    if(this.filtroForm.valid) this.filtroApplicato.emit(this.filtroForm.getRawValue());
  }

  onReset(): void {
    this.filtroForm.reset();
    this.filtroApplicato.emit(this.filtroForm.getRawValue());
  }


}
