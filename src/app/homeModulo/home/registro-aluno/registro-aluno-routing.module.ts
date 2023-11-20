import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroAlunoComponent } from './registro-aluno.component';
const routes: Routes = [
  {path:'', component: RegistroAlunoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroAlunoRoutingModule { }
