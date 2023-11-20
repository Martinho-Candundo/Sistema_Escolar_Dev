import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Modulologin/tela-login/user.interface';
import { registroAluno } from '../homeModulo/home/model/interface_geral';

@Injectable({
  providedIn: 'root'
})
export class GeralService {
  private apiUser = 'http://localhost:3000/users';
  private apiCadastro = 'http://localhost:3000/cliente';
  private notas = 'http://localhost:3000/notas';

  constructor(private httpCliente: HttpClient) { }
  
  //Login User
  chamarApiUser(): Observable<Usuario>{
    return this.httpCliente.get<Usuario>(this.apiUser)
  }
  //Buscar ou obter dados do Banco de dados
  chamarCadastro(): Observable<any>{
    return this.httpCliente.get(this.apiCadastro);
  }
  //Enviar dados ao banco de dados
  adicionarDado(data:any): Observable<any> {
    return this.httpCliente.post(this.apiCadastro,data);
  }
  //Atualizar dados no Banco de dados
  atualizarDado(id:any, dadosAtualizados:any) {
    return this.httpCliente.put(`http://localhost:3000/cliente/${id}`, dadosAtualizados);
  }
  //Deletar dados do Banco de dados
  apagarDado(id:any){
    return this.httpCliente.delete(`http://localhost:3000/cliente/${id}`);
  }
  //Api nota aluno
  notaApi():Observable<registroAluno>{
    return this.httpCliente.get<registroAluno>(this.notas);
  }
  receberFormNotaAlunoBanco(valorNota:any): Observable<any>{
    return this.httpCliente.post(this.notas, valorNota);
  }
  deleteNota(id:any){
     return this.httpCliente.delete(`http://localhost:3000/notas/${id}`);
  }
  atualizarNota(id:any, notaAtual:any){
    return this.httpCliente.put(`http://localhost:3000/notas/${id}`, notaAtual);
  }
}
