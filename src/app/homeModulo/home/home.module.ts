import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RegistroAlunoComponent } from './registro-aluno/registro-aluno.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { ModulologinModule } from 'src/app/Modulologin/modulologin.module';
import { RegistroAlunoModule } from './registro-aluno/registro-aluno.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { AlunoMatriculaComponent } from './aluno-matricula/aluno-matricula.component';

@NgModule({
  declarations: [
    RegistroAlunoComponent,
    HomeComponent,
    CadastroComponent,
    RelatorioComponent,
    AlunoMatriculaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModulologinModule,
    RegistroAlunoModule
  ],
})
export class HomeModule { }
