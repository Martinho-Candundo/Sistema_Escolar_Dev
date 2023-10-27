import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroAlunoRoutingModule } from './registro-aluno-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegistroAlunoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistroAlunoModule { }
