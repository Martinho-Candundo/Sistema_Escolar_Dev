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
  dadosLogin:any;

  constructor(private fb: FormBuilder, private rotas:Router, private receberApi: GeralService) {
    this.meusUser = this.fb.group({
      username:['', Validators.required],
      senha:['', Validators.required],
    })
   }

  loginUser(){
   this.receberApi.chamarApiUser().subscribe((resUser) =>{
    this.dadosLogin = resUser;
    console.log(this.dadosLogin, 'Resposta');
    console.log(this.meusUser.value.username, this.meusUser.value.senha)
    if(this.dadosLogin[0].username === this.meusUser.value.username && this.dadosLogin[0].senha === this.meusUser.value.senha){
       this.rotas.navigate(['home']);
       alert('Login com Sucesso!!! Seja bem-vindo!!');
    }else if(this.dadosLogin[1].username === this.meusUser.value.username && this.dadosLogin[1].senha === this.meusUser.value.senha) {
      this.rotas.navigate(['home']);
      alert('Login com Sucesso!!! Seja bem-vindo!!');
      
    }else{
      alert('utilizador ou senha errado!!!');
    }
   })

  }
  bloqueiarBotao():boolean{
    return this.meusUser.valid;
  }
  ngOnInit(): void {
  }

}
