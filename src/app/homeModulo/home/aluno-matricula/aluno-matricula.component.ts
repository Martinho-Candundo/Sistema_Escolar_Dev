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
  id:number;
  
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
  receberCadastro(){
    this.serviceCadastro.chamarCadastro().subscribe((dados)=>{
      this.dadosCadastrado = dados;
      console.log(this.dadosCadastrado, 'KB');
    })
  }
  atualizarDados(){
    const dadosAtual = this.editarForm.value
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
  fecharModal(){
    this.atualizarDados();
    window.location.reload();
  }
  setValeuForm(dado:any){
    console.log(dado);
    console.log(this.editarForm.value);
    this.editarForm.setValue(dado);
  }
  ngOnInit(): void {
    this.receberCadastro();
    this.atualizarDados();
    // this.carregarDados();
    
  }

}
