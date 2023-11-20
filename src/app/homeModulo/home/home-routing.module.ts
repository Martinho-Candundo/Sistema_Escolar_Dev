import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroAlunoComponent } from './registro-aluno/registro-aluno.component';
import { HomeComponent } from './home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { AlunoMatriculaComponent } from './aluno-matricula/aluno-matricula.component';
import { RegistroNotasComponent } from './registro-notas/registro-notas.component';
import { PropinaAlunoComponent } from './propina-aluno/propina-aluno.component';


const routes: Routes = [
  {path:'', component: HomeComponent, children: [
    {path:'', component: RegistroAlunoComponent},
    {path:'cadastro', component: CadastroComponent},
    {path:'relatorio', component: RelatorioComponent},
    {path:'aluno_matricula', component: AlunoMatriculaComponent},
    {path:'registro_notas', component: RegistroNotasComponent},
    {path:'propina_aluno', component: PropinaAlunoComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
