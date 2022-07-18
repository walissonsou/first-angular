import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseUsuario } from './usuario.model'
@Injectable({
  providedIn: 'root'
})
export class UsuariosusuarioService {

  // PASSO 1
  // o método getUsers recebe o responseUsuario, e  a sintaxe
  // OBSERVABLE -> USADO PARA CHAMADAS ASSÍNCRONAS, A GENTE CHAMA E FICA OBSRVANDO A MUDANÇA
  // quando chamar o get users, a gente chama e fica esperando o retorno, e quando der o retorno a gente
  // faz alguma coisa

  // PASSO 2
  // criar uma variavel com o LINK da api
  private url = "https://reqres.in/api/users";

  // PASSO 3
  // preciamos fazer com que o get faça um get na API
  // precisamos injetar a dependencia HTTPCLIENTE no constructor

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsuario>{
    return this.http.get<ResponseUsuario>(this.url)
  }

  //
}
