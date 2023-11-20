import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeralService } from 'src/app/service/geral.service';
import { registroAluno } from 'src/app/homeModulo/home/model/interface_geral';

@Component({
  selector: 'app-registro-notas',
  templateUrl: './registro-notas.component.html',
  styleUrls: ['./registro-notas.component.scss']
})
export class RegistroNotasComponent implements OnInit {
  resNota:registroAluno;
  dadosDelete:any;
  atualizar:FormGroup;
  dadosAtualizados:any;

  constructor(private servicoNota: GeralService, private fb:FormBuilder) { 
    this.atualizar = this.fb.group({
      nome:['', Validators.required],
      curso:['', Validators.required],
      class:['', Validators.required],
      avalicao_1:['', Validators.required],
      avalicao_2:['', Validators.required],
      exame:['', Validators.required],
      apto:['', Validators.required],
      id:['']

    })
  }

  ngOnInit(): void {
    this.receberNota(); 
  }
  receberNota(){
    this.servicoNota.notaApi().subscribe((dadosNota:registroAluno) => {
      this.resNota = dadosNota;
       console.log(this.resNota, 'Nota');
    })
  }
  removerNota(id:any){
    this.servicoNota.deleteNota(id).subscribe((resDelete)=>{
       this.dadosDelete = resDelete
       console.log(this.dadosDelete, 'Apagar');
       this.receberNota()
    })
  }
  
  atualNota(){
    this.servicoNota.atualizarNota(this.atualizar.controls.id.value, this.atualizar.value).subscribe((valorNota)=>{
      this.dadosAtualizados = valorNota;
      console.log(valorNota, 'Atualll')
    }, (error)=>{
      if(error){
         alert('Atualizado com Sucesso!!!')
      }else {
        alert('Não foi atualizado os dados!!!')
      }
    })
  }
  //O setValue é um método dessas instâncias que permite definir o valor atual do campo controlado
  valorAtual(atualValor:any){
    this.atualizar.setValue(atualValor);
  }
  fecharModalNota(){
    this.atualNota();
    window.location.reload()
  }
}
