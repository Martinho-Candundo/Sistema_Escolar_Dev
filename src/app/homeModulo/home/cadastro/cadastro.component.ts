import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/interface_geral';
import { GeralService } from 'src/app/service/geral.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  cadastrar: FormGroup
  aluno: Aluno;
  novoDado:any;
  

  constructor(private fbuilder: FormBuilder, private adicionarNovo: GeralService) { }
  
  adicionar(dados:any){    
    this.adicionarNovo.adicionarDado(dados).subscribe((dadoNews)=>{
      this.novoDado = dadoNews;
    })
  }
  //Médoto para Cadastro
  cadastrarAluno(){
    // console.log(this.cadastrar.value);
    this.adicionar(this.cadastrar.value);
    this.resetForm();
  }
  resetForm(){
    this.cadastrar.reset();
  }
  //Fim Método para Cadastro

  //Método Campo Obrigatório Formulário
  campoObrigatorio(){
    this.cadastrar = this.fbuilder.group({
      nome:['', Validators.required],
      data_nasc:['', Validators.required],
      telefone:['', Validators.required],
      turma:['', Validators.required],
      class:['', Validators.required],
      curso:['', Validators.required],
      data_matricula:['', Validators.required]
    })
  }
  //Fim Campo obrigatório Formulário
  ngOnInit(): void {
   this.campoObrigatorio();

  }

}
