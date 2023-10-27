import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-aluno',
  templateUrl: './registro-aluno.component.html',
  styleUrls: ['./registro-aluno.component.scss']
})
export class RegistroAlunoComponent implements OnInit {
  dadosCadastrado: any[] = [];
  filtroNome: string = ''; 
  constructor() { }

  ngOnInit(): void {
  }
  filtrarDados() {
    return this.dadosCadastrado.filter(cadastro => {
      return cadastro.nome.toLowerCase().includes(this.filtroNome.toLowerCase());
    });
  }

}
