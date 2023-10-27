import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeralService {
  private apiUser = 'http://localhost:3000/user';
  private apiCadastro = 'http://localhost:3000/cliente';

  constructor(private httpCliente: HttpClient) { }

  chamarApiUser(nome:string, senha:string): Observable<any>{
    return this.httpCliente.post(this.apiUser, {
      usuario : nome,
      password : senha
    });
  }
  chamarCadastro(): Observable<any>{
    return this.httpCliente.get(this.apiCadastro);
  }
  adicionarDado(data:any): Observable<any> {
    return this.httpCliente.post(this.apiCadastro,data);
  }
  atualizarDado(id:any, dadosAtualizados:any) {
    return this.httpCliente.put(`http://localhost:3000/cliente/${id}`, dadosAtualizados);
  }
}
