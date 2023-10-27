import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeralService } from 'src/app/service/geral.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {
  meusUser : FormGroup;
  nome:string = '';
  senha:any = '';

  constructor(private fb: FormBuilder, private rotas:Router, private receberApi: GeralService) { }

  loginUser(){

    console.log('Testando', this.meusUser.value);
    this.receberApi.chamarApiUser(this.nome, this.senha).subscribe(()=>{
      this.rotas.navigate(['home']);
    }, (erro) => {
      alert('Senha ou Nome errado');
      console.log(erro);
    })

  }
  meuGrupoForm(){
    this.meusUser = this.fb.group({
      nome:['', Validators.required],
      senha:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.meuGrupoForm();
  }

}
