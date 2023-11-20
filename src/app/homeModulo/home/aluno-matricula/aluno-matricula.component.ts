import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeralService } from 'src/app/service/geral.service';

@Component({
  selector: 'app-aluno-matricula',
  templateUrl: './aluno-matricula.component.html',
  styleUrls: ['./aluno-matricula.component.scss']
})
export class AlunoMatriculaComponent implements OnInit {
  dadosCadastrado: [] = [];
  dadosAtualizado:any;
  editarForm:FormGroup;
  apagar:any;
  id:number;
  delete_id:number;
  
  constructor(private serviceCadastro: GeralService, private buildForm: FormBuilder) {
    this.editarForm = this.buildForm.group({
      nome:[''],
      data_nasc:['', Validators.required],
      telefone:['', Validators.required],
      turma:['', Validators.required],
      class:['', Validators.required],
      curso:['', Validators.required],
      data_matricula:['', Validators.required],
      id:['']
    })
   }
   //Metodo para receber dados do Banco(GET)
  receberCadastro(){
    this.serviceCadastro.chamarCadastro().subscribe((dados)=>{
      this.dadosCadastrado = dados;
      console.log(this.dadosCadastrado, 'KB');
    })
  }
  //MetodoS para editar o formulario(PUT)
  atualizarDados(){
    const dadosAtual = this.editarForm.value;
    this.serviceCadastro.atualizarDado(this.editarForm.controls.id.value, dadosAtual).subscribe((atualizarDado)=>{
      this.dadosAtualizado = atualizarDado;
      console.log(this.dadosAtualizado, 'Atualizar');
    },(error)=>{
      if(error){
        console.log('Verifica a URL');
      }else{
        console.log('Erro ao atualizar os dados', error);
      }
    })
  
  }
  //Fechar a modal Editar
  fecharModal(){
    this.atualizarDados();
    window.location.reload();
  }
  setValueForm(dado:any){
    console.log(dado);
    console.log(this.editarForm.value);
    this.editarForm.setValue(dado);
  }
  //FIM Metodo para editar o formulario(PUT)
  
  //Apagar dado
  deleteDados(id:number){
    this.serviceCadastro.apagarDado(id).subscribe((dado)=>{
      this.apagar = dado;
      console.log(this.apagar, 'Deletando');
      this.receberCadastro();
    })
  }
  ngOnInit(): void {
    this.receberCadastro();
    this.atualizarDados();
  }

}
