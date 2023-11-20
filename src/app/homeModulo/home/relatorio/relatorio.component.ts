import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeralService } from 'src/app/service/geral.service';


@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {
  formNota:FormGroup;
  todasNotas:any;
  
  constructor(private fb:FormBuilder, private servico: GeralService) { 
    this.formNota = this.fb.group({
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
  dadoAluno(){
    
    this.servico.receberFormNotaAlunoBanco(this.formNota.value).subscribe((dados)=>{
      this.todasNotas = dados;
      console.log(this.todasNotas, 'TesteMeu')
      this.formNota.reset();
    })
  }
  botaoForm():boolean{
    return this.formNota.valid;
  }
  
  ngOnInit(): void {

  }

}
